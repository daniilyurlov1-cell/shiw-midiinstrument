local UiIsOpen = false

local CurrentInstrument
local NotesPlaying = 0
local ActivelyPlayingTimer = 0

local Recording = {
	active = false,
	startTime = 0,
	length = 0,
	events = {},
	buffer = {},
	playing = false
}

-- Хранит позиции играющих игроков для постоянной синхронизации
local PlayingPlayers = {}

RegisterNetEvent('instruments:noteOn')
RegisterNetEvent('instruments:noteOff')
RegisterNetEvent('instruments:showUi')
RegisterNetEvent('instruments:hideUi')
RegisterNetEvent('instruemnts:toggleUi')

function GetNearbyObjects(coords)
	local itemset = CreateItemset(true)
	local size = Citizen.InvokeNative(0x59B57C4B06531E1E, coords, Config.MaxInteractDistance, itemset, 3, Citizen.ResultAsInteger())

	local objects = {}

	if size > 0 then
		for i = 0, size - 1 do
			table.insert(objects, GetIndexedItemInItemset(i, itemset))
		end
	end

	if IsItemsetValid(itemset) then
		DestroyItemset(itemset)
	end

	return objects
end

function IsInstrument(object, info)
	local model = GetEntityModel(object)

	for _, instrumentModel in ipairs(info.models) do
		if model == GetHashKey(instrumentModel) then
			return true
		end
	end

	return false
end

function GetClosestInstrumentObject(ped, info)
	local pos = GetEntityCoords(ped)

	local minDist, closest

	for _, object in ipairs(GetNearbyObjects(pos)) do
		if IsInstrument(object, info) then
			local instrumentPos = GetEntityCoords(object)
			local distance = #(pos - instrumentPos)

			if not minDist or distance < minDist then
				minDist = distance
				closest = object
			end
		end
	end

	return closest
end

-- Модели стульев у пианино
local PianoChairModels = {
	'p_pianochair01x',
	'p_benchpiano02x',
	'p_stool06x'
}

function GetNearbyChair(coords, radius)
	local itemset = CreateItemset(true)
	local size = Citizen.InvokeNative(0x59B57C4B06531E1E, coords, radius, itemset, 3, Citizen.ResultAsInteger())
	
	local closest = nil
	local closestDist = radius + 1
	
	for i = 0, size - 1 do
		local obj = GetIndexedItemInItemset(i, itemset)
		local model = GetEntityModel(obj)
		
		for _, chairModel in ipairs(PianoChairModels) do
			if model == GetHashKey(chairModel) then
				local dist = #(coords - GetEntityCoords(obj))
				if dist < closestDist then
					closest = obj
					closestDist = dist
				end
			end
		end
	end
	
	DestroyItemset(itemset)
	return closest
end

function AttachToInstrument(ped, info)
	local object = GetClosestInstrumentObject(ped, info)

	if object then
		-- Получаем позицию и поворот объекта
		local objectPos = GetEntityCoords(object)
		local objectRot = GetEntityRotation(object)
		
		-- Вычисляем позицию игрока относительно объекта
		local heading = objectRot.z
		local rad = math.rad(heading)
		
		local offsetX = info.position.x * math.cos(rad) - info.position.y * math.sin(rad)
		local offsetY = info.position.x * math.sin(rad) + info.position.y * math.cos(rad)
		
		local targetX = objectPos.x + offsetX
		local targetY = objectPos.y + offsetY
		local targetZ = objectPos.z + info.position.z
		local targetHeading = heading + info.rotation.z
		
		-- Ищем стул рядом и отключаем его коллизию
		local chair = GetNearbyChair(objectPos, 2.0)
		local chairNetId = nil
		if chair then
			SetEntityCollision(chair, false, false)
			if NetworkGetEntityIsNetworked(chair) then
				chairNetId = NetworkGetNetworkIdFromEntity(chair)
			end
		end
		
		-- Замораживаем и телепортируем
		FreezeEntityPosition(ped, true)
		SetEntityCoordsNoOffset(ped, targetX, targetY, targetZ, false, false, false)
		SetEntityHeading(ped, targetHeading)
		
		-- Синхронизируем через сервер (включая netId стула)
		TriggerServerEvent('instruments:syncPosition', targetX, targetY, targetZ, targetHeading, chairNetId)
		
		return true
	else
		return false
	end
end

function DetachFromInstrument(ped)
	FreezeEntityPosition(ped, false)
	TriggerServerEvent('instruments:unsyncPosition')
end

-- Синхронизация позиции от других игроков
RegisterNetEvent('instruments:onSyncPosition')
AddEventHandler('instruments:onSyncPosition', function(playerId, x, y, z, heading, chairNetId)
	-- Сохраняем позицию играющего игрока
	PlayingPlayers[playerId] = {x = x, y = y, z = z, heading = heading, chairNetId = chairNetId}
	
	if GetPlayerServerId(PlayerId()) == playerId then
		return
	end
	
	local player = GetPlayerFromServerId(playerId)
	if player == -1 then
		return
	end
	
	local playerPed = GetPlayerPed(player)
	if not DoesEntityExist(playerPed) then
		return
	end
	
	-- СНАЧАЛА отключаем коллизию между игроком и всеми стульями рядом
	if chairNetId then
		local chair = NetworkGetEntityFromNetworkId(chairNetId)
		if DoesEntityExist(chair) then
			SetEntityNoCollisionEntity(playerPed, chair, true)
			SetEntityNoCollisionEntity(chair, playerPed, true)
		end
	end
	
	-- Ищем все стулья рядом и отключаем коллизию
	local nearbyChair = GetNearbyChair(vector3(x, y, z), 3.0)
	if nearbyChair then
		SetEntityNoCollisionEntity(playerPed, nearbyChair, true)
		SetEntityNoCollisionEntity(nearbyChair, playerPed, true)
	end
	
	-- Ждём чтобы коллизия успела отключиться
	Wait(0)
	
	-- Теперь телепортируем
	SetEntityCoordsNoOffset(playerPed, x, y, z, false, false, false)
	SetEntityHeading(playerPed, heading)
end)

RegisterNetEvent('instruments:onUnsyncPosition')
AddEventHandler('instruments:onUnsyncPosition', function(playerId)
	-- Удаляем из списка играющих
	PlayingPlayers[playerId] = nil
end)

-- Постоянный цикл синхронизации позиций играющих игроков (каждый кадр)
CreateThread(function()
	while true do
		Wait(0)
		
		for playerId, pos in pairs(PlayingPlayers) do
			if GetPlayerServerId(PlayerId()) ~= playerId then
				local player = GetPlayerFromServerId(playerId)
				if player ~= -1 then
					local playerPed = GetPlayerPed(player)
					if DoesEntityExist(playerPed) then
						-- Отключаем коллизию между игроком и стулом
						if pos.chairNetId then
							local chair = NetworkGetEntityFromNetworkId(pos.chairNetId)
							if DoesEntityExist(chair) then
								SetEntityNoCollisionEntity(playerPed, chair, true)
								SetEntityNoCollisionEntity(chair, playerPed, true)
							end
						end
						
						-- Также ищем все стулья рядом
						local nearbyChair = GetNearbyChair(vector3(pos.x, pos.y, pos.z), 3.0)
						if nearbyChair then
							SetEntityNoCollisionEntity(playerPed, nearbyChair, true)
							SetEntityNoCollisionEntity(nearbyChair, playerPed, true)
						end
						
						-- Принудительно ставим в позицию
						SetEntityCoordsNoOffset(playerPed, pos.x, pos.y, pos.z, false, false, false)
						SetEntityHeading(playerPed, pos.heading)
					end
				end
			end
		end
	end
end)

function StartPlayingInstrument(instrument)
	if CurrentInstrument then
		StopPlayingInstrument()
	end

	CurrentInstrument = Config.Instruments[instrument]

	if not CurrentInstrument then
		return
	end

	local ped = PlayerPedId()

	SendNUIMessage({
		type = 'setInstrumentPreset',
		instrument = CurrentInstrument.midiInstrument,
	})

	if CurrentInstrument.attachTo and not AttachToInstrument(ped, CurrentInstrument.attachTo) then
		CurrentInstrument = nil
		return
	end

	ActivelyPlayingTimer = 0
	NotesPlaying = 0
end

function StopPlayingInstrument()
	if not CurrentInstrument then
		return
	end

	local instrument = CurrentInstrument
	CurrentInstrument = nil

	local ped = PlayerPedId()

	if instrument.attachTo then
		DetachFromInstrument(ped)
	end

	if instrument.props then
		for _, prop in ipairs(instrument.props) do
			if prop.handle then
				DeleteObject(prop.handle)
			end
		end
	end

	local anim = GetAnimation(ped, instrument)

	StopAnimTask(ped, anim.dict, anim.name)
end

function ShowUi()
	SendNUIMessage({
		type = 'showUi'
	})
	SetNuiFocus(true, true)
	UiIsOpen = true
end

function HideUi()
	SendNUIMessage({
		type = 'hideUi'
	})
	SetNuiFocus(false, false)
	UiIsOpen = false
end

function ToggleUi()
	if UiIsOpen then
		HideUi()
	else
		ShowUi()
	end
end

function IsInSameRoom(entity1, entity2)
	local interior1 = GetInteriorFromEntity(entity1)
	local interior2 = GetInteriorFromEntity(entity2)

	if interior1 ~= interior2 then
		return false
	end

	local roomHash1 = GetRoomKeyFromEntity(entity1)
	local roomHash2 = GetRoomKeyFromEntity(entity2)

	if roomHash1 ~= roomHash2 then
		return false
	end

	return true
end

function GetListenerInfo()
	local cam = GetRenderingCam()
	local ped = PlayerPedId()

	local listenerCoords

	if cam == -1 then
		if IsPedDeadOrDying(ped) then
			listenerCoords = GetGameplayCamCoord()
		else
			listenerCoords = GetEntityCoords(ped)
		end
	else
		listenerCoords = GetCamCoord(cam)
	end

	return ped, listenerCoords
end

function IsActivelyPlaying()
	local isPlaying = GetSystemTime() < ActivelyPlayingTimer

	if not isPlaying and NotesPlaying > 0 then
		NotesPlaying = 0
	end

	return isPlaying
end

function GetAnimation(ped, instrument)
	local anim

	if IsActivelyPlaying() then
		anim = instrument.activeAnimation
	else
		anim = instrument.inactiveAnimation
	end

	local isMale = IsPedMale(ped)

	if anim.female and not isMale then
		return anim.female
	elseif anim.male and isMale then
		return anim.male
	else
		return anim
	end
end

function PlayAnimation(ped, anim)
	if not DoesAnimDictExist(anim.dict) then
		return
	end

	RequestAnimDict(anim.dict)

	while not HasAnimDictLoaded(anim.dict) do
		Wait(0)
	end

	TaskPlayAnim(ped, anim.dict, anim.name, 1.0, 1.0, -1, anim.flag, 0, false, false, false, '', false)

	RemoveAnimDict(anim.dict)
end

function GetInstrumentList()
	local instruments = {}

	for instrument, _ in pairs(Config.Instruments) do
		table.insert(instruments, instrument)
	end

	table.sort(instruments)

	return instruments
end

function GetMidiInstrumentList()
	local midiInstruments = {}
	local seen = {}

	for _, instrumentConfig in pairs(Config.Instruments) do
		if instrumentConfig.midiInstrument and not seen[instrumentConfig.midiInstrument] then
			table.insert(midiInstruments, instrumentConfig.midiInstrument)
			seen[instrumentConfig.midiInstrument] = true
		end
	end

	table.sort(midiInstruments)

	return midiInstruments
end

function RecordNoteOn(channel, note, octave)
	local lastEvent = Recording.buffer[#Recording.buffer]

	if lastEvent then
		RecordWait(GetSystemTime() - Recording.startTime - lastEvent.time)
	end

	table.insert(Recording.buffer, {
		type = 'noteOn',
		time = GetSystemTime() - Recording.startTime,
		channel = channel,
		note = note,
		octave = octave
	})
end

function RecordNoteOff(channel, note, octave)
	local lastEvent = Recording.buffer[#Recording.buffer]

	if lastEvent then
		RecordWait(GetSystemTime() - Recording.startTime - lastEvent.time)
	end

	table.insert(Recording.buffer, {
		type = 'noteOff',
		time = GetSystemTime() - Recording.startTime,
		channel = channel,
		note = note,
		octave = octave
	})
end

function NoteOn(channel, instrument, note, octave)
	TriggerServerEvent('instruments:noteOn', channel, instrument, note, octave)

	NotesPlaying = NotesPlaying + 1
	ActivelyPlayingTimer = GetSystemTime() + 4000

	if Recording.active then
		if not Recording.playing then
			PlaybackRecording()
		end

		RecordNoteOn(channel, note, octave)
	end
end

function NoteOff(channel, note, octave)
	TriggerServerEvent('instruments:noteOff', channel, note, octave)

	NotesPlaying = NotesPlaying - 1

	if NotesPlaying < 0 then
		NotesPlaying = 0
	end

	if NotesPlaying == 0 then
		ActivelyPlayingTimer = GetSystemTime() + 500
	end

	if Recording.active then
		RecordNoteOff(channel, note, octave)
	end
end

function StartRecording()
	Recording.buffer = {}
	Recording.length = 0
	Recording.startTime = GetSystemTime()
	Recording.active = true
end

function StopRecording()
	Recording.active = false
	Recording.length = GetSystemTime() - Recording.startTime

	Recording.events = {}
	for _, event in ipairs(Recording.buffer) do
		table.insert(Recording.events, event)
	end

	Recording.playing = false
end

function RecordWait(duration)
	table.insert(Recording.buffer, {
		type = 'wait',
		duration = duration
	})
end

function PlaybackRecording()
	CreateThread(function()
		Recording.playing = true

		for _, event in ipairs(Recording.events) do
			if not Recording.playing then
				break
			end

			if event.type == 'noteOn' then
				NoteOn(event.channel, event.instrument, event.note, event.octave)

				SendNUIMessage({
					type = 'noteOn',
					channel = event.channel,
					note = event.note,
					octave = event.octave,
					distance = 0,
					sameRoom = true
				})
			elseif event.type == 'noteOff' then
				NoteOff(event.channel, event.note, event.octave)

				SendNUIMessage({
					type = 'noteOff',
					channel = event.channel,
					note = event.note,
					octave = event.octave
				})
			elseif event.type == 'wait' then
				Wait(event.duration)
			end
		end

		Recording.playing = false
	end)
end

function EraseRecording()
	Recording.active = false
	Recording.startTime = 0
	Recording.length = 0
	Recording.events = {}
	Recording.buffer = {}
	Recording.playing = false
end

RegisterCommand('instrument', function(source, args, raw)
	if args[1] == 'stop' then
		StopPlayingInstrument()
	elseif args[1] == 'reset' then
		-- Полный сброс состояния
		StopPlayingInstrument()
		HideUi()
		CurrentInstrument = nil
		NotesPlaying = 0
		ActivelyPlayingTimer = 0
		Recording = {
			active = false,
			startTime = 0,
			length = 0,
			events = {},
			buffer = {},
			playing = false
		}
		FreezeEntityPosition(PlayerPedId(), false)
		print('[instruments] State reset complete')
	else
		ShowUi()

		if args[1] then
			StartPlayingInstrument(args[1])
		end
	end
end)

RegisterNUICallback('init', function(data, cb)
	cb({
		maxVolume = Config.MaxVolume,
		baseOctave = Config.BaseOctave,
		minAttenuationFactor = Config.MinAttenuationFactor,
		maxAttenuationFactor = Config.MaxAttenuationFactor,
		minVolumeFactor = Config.MinVolumeFactor,
		maxVolumeFactor = Config.MaxVolumeFactor,
		soundfontUrl = Config.SoundfontUrl,
		instrumentsUrl = Config.InstrumentsUrl,
		instruments = GetInstrumentList(),
		midiInstruments = GetMidiInstrumentList()
	})
end)

RegisterNUICallback('noteOn', function(data, cb)
	NoteOn(data.channel, data.instrument, data.note, data.octave)
	cb({})
end)

RegisterNUICallback('noteOff', function(data, cb)
	NoteOff(data.channel, data.note, data.octave)
	cb({})
end)

RegisterNUICallback('closeUi', function(data, cb)
	StopPlayingInstrument()
	HideUi()
	cb({})
end)

RegisterNUICallback('startRecording', function(data, cb)
	StartRecording()
	cb({})
end)

RegisterNUICallback('stopRecording', function(data, cb)
	StopRecording()
	cb({
		length = Recording.length
	})
end)

RegisterNUICallback('playbackRecording', function(data, cb)
	PlaybackRecording()
	cb({})
end)

RegisterNUICallback('eraseRecording', function(data, cb)
	EraseRecording()
	cb({})
end)

RegisterNUICallback('startPlayingInstrument', function(data, cb)
	StartPlayingInstrument(data.instrument)
	cb({})
end)

RegisterNUICallback('stopPlayingInstrument', function(data, cb)
	StopPlayingInstrument()
	cb({})
end)

AddEventHandler('onResourceStop', function(resourceName)
	if GetCurrentResourceName() ~= resourceName then
		return
	end

	if UiIsOpen then
		StopPlayingInstrument()
		HideUi()
	end
end)

AddEventHandler('instruments:noteOn', function(serverId, channel, instrument, note, octave)
	local player = GetPlayerFromServerId(serverId)

	if player == PlayerId() then
		return
	end

	local listener, listenerCoords = GetListenerInfo()
	local soundSource = GetPlayerPed(player)
	local distance = #(listenerCoords - GetEntityCoords(soundSource))

	if distance <= Config.MaxNoteDistance then
		-- Используем serverId % 15 + 1 как канал (каналы 1-15 для других игроков, 0 для себя)
		local playerChannel = (serverId % 15) + 1
		
		SendNUIMessage({
			type = 'noteOn',
			channel = playerChannel,
			instrument = instrument,
			note = note,
			octave = octave,
			distance = distance,
			sameRoom = IsInSameRoom(listener, soundSource)
		})
	end
end)

AddEventHandler('instruments:noteOff', function(serverId, channel, note, octave)
	local player = GetPlayerFromServerId(serverId)

	if player == PlayerId() then
		return
	end

	local listener, listenerCoords = GetListenerInfo()
	local soundSource = GetPlayerPed(player)
	local distance = #(listenerCoords - GetEntityCoords(soundSource))

	if distance <= Config.MaxNoteDistance then
		-- Используем тот же канал
		local playerChannel = (serverId % 15) + 1
		
		SendNUIMessage({
			type = 'noteOff',
			channel = playerChannel,
			note = note,
			octave = octave
		})
	end
end)

AddEventHandler('instruments:showUi', ShowUi)
AddEventHandler('instruments:hideUi', HideUi)
AddEventHandler('instruments:toggleUi', ToggleUi)

function CreateInstrumentObject(prop)
	prop.handle = CreateObjectNoOffset(GetHashKey(prop.model), 0.0, 0.0, 0.0, true, false, false, false)
end

function AttachInstrumentObject(ped, prop)
	local bone = prop.bone

	if type(bone) == 'string' then
		bone = GetEntityBoneIndexByName(ped, bone)
	end

	AttachEntityToEntity(prop.handle, ped, bone, prop.position, prop.rotation, false, false, true, false, 0, true, false, false)
end
-- ============================================
-- MIDI Download Proxy (клиентская часть)
-- ============================================
local midiDownloadCallbacks = {}
local midiRequestId = 0

RegisterNUICallback('downloadMidi', function(data, cb)
    local url = data.url
    
    if not url or url == '' then
        cb({ success = false, error = 'No URL provided' })
        return
    end
    
    -- Генерируем уникальный ID запроса
    midiRequestId = midiRequestId + 1
    local requestId = midiRequestId
    
    -- Сохраняем callback
    midiDownloadCallbacks[requestId] = cb
    
    print('[instruments] Client requesting MIDI download: ' .. url)
    
    -- Отправляем запрос на сервер
    TriggerServerEvent('instruments:downloadMidi', requestId, url)
end)

-- Получаем ответ от сервера
RegisterNetEvent('instruments:midiDownloaded')
AddEventHandler('instruments:midiDownloaded', function(requestId, success, error, data)
    local cb = midiDownloadCallbacks[requestId]
    
    if cb then
        if success then
            print('[instruments] MIDI received from server, size: ' .. #data .. ' bytes')
            cb({ success = true, data = data })
        else
            print('[instruments] MIDI download error: ' .. tostring(error))
            cb({ success = false, error = error })
        end
        
        -- Удаляем использованный callback
        midiDownloadCallbacks[requestId] = nil
    end
end)
-- ============================================
-- SESSION MANAGEMENT (NUI Callbacks)
-- ============================================
local currentMidiSession = nil
local sessionDataReceived = false
local sessionDataResult = nil

-- Начать сессию (когда играешь MIDI)
RegisterNUICallback('startMidiSession', function(data, cb)
    currentMidiSession = {
        midiUrl = data.midiUrl,
        position = 0
    }
    TriggerServerEvent('instruments:startSession', data.midiUrl)
    cb({ success = true })
end)

-- Остановить сессию
RegisterNUICallback('stopMidiSession', function(data, cb)
    currentMidiSession = nil
    TriggerServerEvent('instruments:stopSession')
    cb({ success = true })
end)

-- Обновить позицию воспроизведения
RegisterNUICallback('updateMidiPosition', function(data, cb)
    if currentMidiSession then
        currentMidiSession.position = data.position
        TriggerServerEvent('instruments:updatePosition', data.position)
    end
    cb({ success = true })
end)

-- Присоединиться к ближайшей сессии
RegisterNUICallback('joinNearestSession', function(data, cb)
    sessionDataReceived = false
    sessionDataResult = nil
    
    -- Запрашиваем сессию у сервера
    TriggerServerEvent('instruments:requestNearestSession')
    
    -- Ждём ответ в отдельном потоке
    CreateThread(function()
        local timeout = 30 -- 3 секунды (30 * 100ms)
        
        while not sessionDataReceived and timeout > 0 do
            Wait(100)
            timeout = timeout - 1
        end
        
        if sessionDataReceived and sessionDataResult then
            cb({
                success = true,
                playerId = sessionDataResult.playerId,
                midiUrl = sessionDataResult.midiUrl,
                position = sessionDataResult.position or 0
            })
        else
            cb({ success = false, error = "No session found or timeout" })
        end
    end)
end)

-- Получаем данные сессии от сервера
RegisterNetEvent('instruments:sessionData')
AddEventHandler('instruments:sessionData', function(sessionData)
    sessionDataReceived = true
    sessionDataResult = sessionData
end)
CreateThread(function()
    while true do
        Wait(500) -- Каждые 500мс
        
        if currentMidiSession and currentMidiSession.position then
            TriggerServerEvent('instruments:updatePosition', currentMidiSession.position)
        end
    end
end)
-- Получить текущую позицию сессии (для синхронизации после загрузки)
RegisterNUICallback('getCurrentSessionPosition', function(data, cb)
    sessionDataReceived = false
    sessionDataResult = nil
    
    TriggerServerEvent('instruments:requestNearestSession')
    
    CreateThread(function()
        local timeout = 20 -- 2 секунды
        
        while not sessionDataReceived and timeout > 0 do
            Wait(100)
            timeout = timeout - 1
        end
        
        if sessionDataReceived and sessionDataResult then
            cb({
                success = true,
                position = sessionDataResult.position or 0
            })
        else
            cb({ success = false, position = 0 })
        end
    end)
end)
-- Покинуть сессию
RegisterNUICallback('leaveSession', function(data, cb)
    TriggerServerEvent('instruments:leaveSession')
    cb({ success = true })
end)
CreateThread(function()
	TriggerEvent('chat:addSuggestion', '/instrument', 'Play an instrument', {
		{name = 'instrument', help = table.concat(GetInstrumentList(), ', ') .. ', or stop to stop playing an instrument'}
	})

	while true do
		Wait(250)

		if CurrentInstrument then
			local ped = PlayerPedId()
			local anim = GetAnimation(ped, CurrentInstrument)

			if not IsEntityPlayingAnim(ped, anim.dict, anim.name, anim.flag) then
				PlayAnimation(ped, anim)
			end

			if CurrentInstrument.props then
				for _, prop in ipairs(CurrentInstrument.props) do
					if not (prop.handle and DoesEntityExist(prop.handle)) then
						CreateInstrumentObject(prop)
						AttachInstrumentObject(ped, prop)
					elseif not IsEntityAttachedToEntity(prop.handle, ped) then
						AttachInstrumentObject(ped, prop)
					end
				end
			end
		end
	end
end)