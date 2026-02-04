/*
	----------------------------------------------------------------------
	Web MIDI API - Native Soundbanks
	----------------------------------------------------------------------
	http://webaudio.github.io/web-midi-api/
	----------------------------------------------------------------------
*/

(function(root) { 'use strict';

	var plugin = null;
	var output = null;
	var channels = [];
	var midi = root.WebMIDI = {api: 'webmidi'};

	// Вспомогательная функция для отправки с правильным временем
	var sendRaw = function(data, delay) {
		if (!output) return;
		// Если delay не передан или равен 0, отправляем сразу
		// Иначе добавляем текущее время performance.now()
		var timestamp = (delay && delay > 0) ? window.performance.now() + (delay * 1000) : 0;
		output.send(data, timestamp);
	};

	midi.send = function(data, delay) {
		sendRaw(data, delay);
	};

	midi.setController = function(channel, type, value, delay) {
		sendRaw([channel, type, value], delay);
	};

	midi.setVolume = function(channel, volume, delay) {
		sendRaw([0xB0 + channel, 0x07, volume], delay);
	};

	midi.programChange = function(channel, program, delay) {
		sendRaw([0xC0 + channel, program], delay);
	};

	midi.pitchBend = function(channel, program, delay) {
		sendRaw([0xE0 + channel, program], delay);
	};

	midi.noteOn = function(channel, note, velocity, delay) {
		sendRaw([0x90 + channel, note, velocity], delay);
	};

	midi.noteOff = function(channel, note, delay) {
		sendRaw([0x80 + channel, note, 0], delay);
	};

	midi.chordOn = function(channel, chord, velocity, delay) {
		for (var n = 0; n < chord.length; n ++) {
			var note = chord[n];
			sendRaw([0x90 + channel, note, velocity], delay);
		}
	};

	midi.chordOff = function(channel, chord, delay) {
		for (var n = 0; n < chord.length; n ++) {
			var note = chord[n];
			sendRaw([0x80 + channel, note, 0], delay);
		}
	};

	midi.stopAllNotes = function() {
		if (!output) return;
		output.clear(); // В новых браузерах cancel() заменен на clear()
		for (var channel = 0; channel < 16; channel ++) {
			// Отправляем All Notes Off (123) и All Sound Off (120) для надежности
			output.send([0xB0 + channel, 123, 0]);
			output.send([0xB0 + channel, 120, 0]);
		}
	};

	midi.connect = function(opts) {
		root.setDefaultPlugin(midi);
		var errFunction = function(err) {
			console.warn('WebMIDI rejected or error:', err);
			if (window.AudioContext) {
				opts.api = 'webaudio';
			} else if (window.Audio) {
				opts.api = 'audiotag';
			} else {
				return;
			}
			root.loadPlugin(opts);
		};

		if (!navigator.requestMIDIAccess) {
			console.log('WebMIDI API not available.');
			errFunction();
			return;
		}

		try {
			navigator.requestMIDIAccess({ sysex: false }).then(function(access) {
				plugin = access;
				
				// ИСПРАВЛЕНИЕ: Правильный способ получить первый выход в современных браузерах
				var outputs = plugin.outputs;
				if (typeof outputs.values === 'function') {
					// Современный стандарт (Iterator)
					var iterator = outputs.values();
					var first = iterator.next();
					output = first.value;
				} else {
					// Старые браузеры (массив)
					output = outputs[0];
				}

				if (output === undefined) {
					console.log('No MIDI output devices found.');
					errFunction();
				} else {
					console.log('MIDI connected to:', output.name);
					opts.onsuccess && opts.onsuccess();
				}
			}, errFunction);
		} catch (e) {
			console.log('WebMIDI access error:', e);
			errFunction();
		}
	};

})(MIDI);