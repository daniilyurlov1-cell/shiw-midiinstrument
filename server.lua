print('[instruments] SERVER STARTING')

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
    
    print('[instruments] ========================================')
    print('[instruments] Download request from player: ' .. tostring(src))
    print('[instruments] RequestId: ' .. tostring(requestId))
    print('[instruments] URL: ' .. tostring(url))
    
    if not url or url == '' then
        print('[instruments] ERROR: Empty URL')
        TriggerClientEvent('instruments:midiDownloaded', src, requestId, false, 'Empty URL', nil)
        return
    end
    
    print('[instruments] Starting HTTP request...')
    
    PerformHttpRequest(url, function(statusCode, responseData, responseHeaders)
        print('[instruments] ========================================')
        print('[instruments] HTTP Callback received!')
        print('[instruments] Status code: ' .. tostring(statusCode))
        print('[instruments] Response type: ' .. type(responseData))
        
        if responseData then
            print('[instruments] Response length: ' .. tostring(#responseData))
        else
            print('[instruments] Response is nil!')
        end
        
        if statusCode == 200 and responseData and #responseData > 0 then
            print('[instruments] Converting to bytes...')
            
            local bytes = {}
            local len = #responseData
            
            -- Конвертируем в байты
            for i = 1, len do
                bytes[i] = string.byte(responseData, i)
            end
            
            print('[instruments] Converted ' .. #bytes .. ' bytes')
            print('[instruments] Sending to client...')
            
            TriggerClientEvent('instruments:midiDownloaded', src, requestId, true, nil, bytes)
            
            print('[instruments] Sent to client!')
        else
            local errorMsg = 'HTTP ' .. tostring(statusCode)
            print('[instruments] Download failed: ' .. errorMsg)
            TriggerClientEvent('instruments:midiDownloaded', src, requestId, false, errorMsg, nil)
        end
        
        print('[instruments] ========================================')
    end, 'GET', '', {
        ['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ['Accept'] = '*/*',
        ['Accept-Encoding'] = 'identity'
    })
    
    print('[instruments] HTTP request sent, waiting for response...')
end)

print('[instruments] SERVER READY')