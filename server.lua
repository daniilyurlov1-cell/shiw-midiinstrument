print('[instruments] SERVER STARTING')

-- Хранилище сессий
local playerSessions = {}

RegisterNetEvent('instruments:noteOn')
RegisterNetEvent('instruments:noteOff') 
RegisterNetEvent('instruments:syncPosition')
RegisterNetEvent('instruments:unsyncPosition')
RegisterNetEvent('instruments:downloadMidi')

AddEventHandler('instruments:noteOn', function(channel, instrument, note, octave)
    TriggerClientEvent('instruments:noteOn', -1, source, channel, instrument, note, octave)
end)

AddEventHandler('instruments:noteOff', function(channel, note, octave)
    TriggerClientEvent('instruments:noteOff', -1, source, channel, note, octave)
end)

AddEventHandler('instruments:syncPosition', function(x, y, z, heading, chairNetId)
    TriggerClientEvent('instruments:onSyncPosition', -1, source, x, y, z, heading, chairNetId)
end)

AddEventHandler('instruments:unsyncPosition', function()
    TriggerClientEvent('instruments:onUnsyncPosition', -1, source)
end)

AddEventHandler('instruments:downloadMidi', function(requestId, url)
    local src = source
    
    print('[instruments] Download request from player: ' .. tostring(src))
    print('[instruments] URL: ' .. tostring(url))
    
    if not url or url == '' then
        TriggerClientEvent('instruments:midiDownloaded', src, requestId, false, 'Empty URL', nil)
        return
    end
    
    PerformHttpRequest(url, function(statusCode, responseData, responseHeaders)
        if statusCode == 200 and responseData and #responseData > 0 then
            local bytes = {}
            for i = 1, #responseData do
                bytes[i] = string.byte(responseData, i)
            end
            TriggerClientEvent('instruments:midiDownloaded', src, requestId, true, nil, bytes)
        else
            TriggerClientEvent('instruments:midiDownloaded', src, requestId, false, 'HTTP ' .. tostring(statusCode), nil)
        end
    end, 'GET', '', {
        ['User-Agent'] = 'Mozilla/5.0',
        ['Accept'] = '*/*',
        ['Accept-Encoding'] = 'identity'
    })
end)

-- ============================================
-- SESSION MANAGEMENT (Server Events)
-- ============================================

RegisterServerEvent('instruments:startSession')
AddEventHandler('instruments:startSession', function(midiUrl)
    local src = source
    playerSessions[src] = {
        playerId = src,
        playerName = GetPlayerName(src) or "Unknown",
        midiUrl = midiUrl,
        position = 0,
        startTime = GetGameTimer()
    }
    print('[instruments] Player ' .. src .. ' started session: ' .. (midiUrl or 'unknown'))
end)

RegisterServerEvent('instruments:stopSession')
AddEventHandler('instruments:stopSession', function()
    local src = source
    playerSessions[src] = nil
    print('[instruments] Player ' .. src .. ' stopped session')
end)

RegisterServerEvent('instruments:updatePosition')
AddEventHandler('instruments:updatePosition', function(position)
    local src = source
    if playerSessions[src] then
        playerSessions[src].position = position
    end
end)

RegisterServerEvent('instruments:requestNearestSession')
AddEventHandler('instruments:requestNearestSession', function()
    local src = source
    local srcPed = GetPlayerPed(src)
    
    if not srcPed or srcPed == 0 then
        TriggerClientEvent('instruments:sessionData', src, nil)
        return
    end
    
    local srcCoords = GetEntityCoords(srcPed)
    local nearestSession = nil
    local nearestDistance = 50.0
    
    for playerId, session in pairs(playerSessions) do
        if playerId ~= src then
            local targetPed = GetPlayerPed(playerId)
            if targetPed and targetPed ~= 0 then
                local targetCoords = GetEntityCoords(targetPed)
                local distance = #(srcCoords - targetCoords)
                
                if distance < nearestDistance then
                    nearestDistance = distance
                    nearestSession = session
                end
            end
        end
    end
    
    TriggerClientEvent('instruments:sessionData', src, nearestSession)
end)
RegisterServerEvent('instruments:requestNearestSession')
AddEventHandler('instruments:requestNearestSession', function()
    local src = source
    local srcPed = GetPlayerPed(src)
    
    if not srcPed or srcPed == 0 then
        TriggerClientEvent('instruments:sessionData', src, nil)
        return
    end
    
    local srcCoords = GetEntityCoords(srcPed)
    local nearestSession = nil
    local nearestDistance = 50.0
    
    for playerId, session in pairs(playerSessions) do
        if playerId ~= src then
            local targetPed = GetPlayerPed(playerId)
            if targetPed and targetPed ~= 0 then
                local targetCoords = GetEntityCoords(targetPed)
                local distance = #(srcCoords - targetCoords)
                
                if distance < nearestDistance then
                    nearestDistance = distance
                    -- Копируем сессию и добавляем актуальную позицию
                    nearestSession = {
                        playerId = session.playerId,
                        playerName = session.playerName,
                        midiUrl = session.midiUrl,
                        position = session.position, -- Последняя известная позиция
                        startTime = session.startTime
                    }
                end
            end
        end
    end
    
    if nearestSession then
        print('[instruments] Sending session to ' .. src .. ', URL: ' .. nearestSession.midiUrl .. ', Position: ' .. nearestSession.position)
    end
    
    TriggerClientEvent('instruments:sessionData', src, nearestSession)
end)
RegisterServerEvent('instruments:leaveSession')
AddEventHandler('instruments:leaveSession', function()
    -- Nothing to do
end)

AddEventHandler('playerDropped', function()
    local src = source
    playerSessions[src] = nil
end)

print('[instruments] SERVER READY')