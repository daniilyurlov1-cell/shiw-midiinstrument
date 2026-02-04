const keys = {
	90: 'key-C1',
	83: 'key-Db1',
	88: 'key-D1',
	68: 'key-Eb1',
	67: 'key-E1',
	86: 'key-F1',
	71: 'key-Gb1',
	66: 'key-G1',
	72: 'key-Ab1',
	78: 'key-A1',
	74: 'key-Bb1',
	77: 'key-B1',
	188: 'key-C2',
	76: 'key-Db2',
	190: 'key-D2',
	186: 'key-Eb2',
	191: 'key-E2',
	81: 'key-F2',
	50: 'key-Gb2',
	87: 'key-G2',
	51: 'key-Ab2',
	69: 'key-A2',
	52: 'key-Bb2',
	82: 'key-B2',
	84: 'key-C3',
	54: 'key-Db3',
	89: 'key-D3',
	55: 'key-Eb3',
	85: 'key-E3',
	73: 'key-F3',
	57: 'key-Gb3',
	79: 'key-G3',
	48: 'key-Ab3',
	80: 'key-A3',
	189: 'key-Bb3',
	219: 'key-B3',
};

const majorChordKeys = [
	{
		'key-C1': ['key-C1', 'key-E1', 'key-G1'],
		'key-Db1': ['key-Db1', 'key-F1', 'key-Ab1'],
		'key-D1': ['key-D1', 'key-Gb1', 'key-A1'],
		'key-Eb1': ['key-Eb1', 'key-G1', 'key-Bb1'],
		'key-E1': ['key-E1', 'key-Ab1', 'key-B1'],
		'key-F1': ['key-F1', 'key-A1', 'key-C2'],
		'key-Gb1': ['key-Gb1', 'key-Bb1', 'key-Db2'],
		'key-G1': ['key-G1', 'key-B1', 'key-D2'],
		'key-Ab1': ['key-Ab1', 'key-C2', 'key-Eb2'],
		'key-A1': ['key-A1', 'key-Db2', 'key-E2'],
		'key-Bb1': ['key-Bb1', 'key-D2', 'key-F2'],
		'key-B1': ['key-B1', 'key-Eb2', 'key-Gb2']
	},
	{
		'key-C2': ['key-C2', 'key-E1', 'key-G1'],
		'key-Db2': ['key-Db2', 'key-F1', 'key-Ab1'],
		'key-D2': ['key-D2', 'key-Gb1', 'key-A1'],
		'key-Eb2': ['key-Eb2', 'key-G1', 'key-Bb1'],
		'key-E2': ['key-E2', 'key-Ab1', 'key-B1'],
		'key-F2': ['key-F2', 'key-A1', 'key-C2'],
		'key-Gb2': ['key-Gb2', 'key-Bb1', 'key-Db2'],
		'key-G2': ['key-G2', 'key-B1', 'key-D2'],
		'key-Ab2': ['key-Ab2', 'key-C2', 'key-Eb2'],
		'key-A2': ['key-A2', 'key-Db2', 'key-E2'],
		'key-Bb2': ['key-Bb2', 'key-D2', 'key-F2'],
		'key-B2': ['key-B2', 'key-Eb2', 'key-Gb2']
	},
	{
		'key-C3': ['key-C3', 'key-E3', 'key-G2'],
		'key-Db3': ['key-Db3', 'key-F3', 'key-Ab2'],
		'key-D3': ['key-D3', 'key-Gb3', 'key-A2'],
		'key-Eb3': ['key-Eb3', 'key-G3', 'key-Bb2'],
		'key-E3': ['key-E3', 'key-Ab3', 'key-B2'],
		'key-F3': ['key-F3', 'key-A3', 'key-C3'],
		'key-Gb3': ['key-Gb3', 'key-Bb3', 'key-Db3'],
		'key-G3': ['key-G3', 'key-B3', 'key-D3'],
		'key-Ab3': ['key-Ab3', 'key-C3', 'key-Eb3'],
		'key-A3': ['key-A3', 'key-Db3', 'key-E3'],
		'key-Bb3': ['key-Bb3', 'key-D3', 'key-F3'],
		'key-B3': ['key-B3', 'key-Eb3', 'key-Gb3']
	}
];

const minorChordKeys = [
	{
		'key-C1': ['key-C1', 'key-Eb1', 'key-G1'],
		'key-Db1': ['key-Db1', 'key-E1', 'key-Ab1'],
		'key-D1': ['key-D1', 'key-F1', 'key-A1'],
		'key-Eb1': ['key-Eb1', 'key-Gb1', 'key-Bb1'],
		'key-E1': ['key-E1', 'key-G1', 'key-B1'],
		'key-F1': ['key-F1', 'key-Ab1', 'key-C2'],
		'key-Gb1': ['key-Gb1', 'key-A1', 'key-Db2'],
		'key-G1': ['key-G1', 'key-Bb1', 'key-D2'],
		'key-Ab1': ['key-Ab1', 'key-B1', 'key-Eb2'],
		'key-A1': ['key-A1', 'key-C2', 'key-E2'],
		'key-Bb1': ['key-Bb1', 'key-Db2', 'key-F2'],
		'key-B1': ['key-B1', 'key-D2', 'key-Gb2']
	},
	{
		'key-C2': ['key-C2', 'key-Eb1', 'key-G1'],
		'key-Db2': ['key-Db2', 'key-E1', 'key-Ab1'],
		'key-D2': ['key-D2', 'key-F1', 'key-A1'],
		'key-Eb2': ['key-Eb2', 'key-Gb1', 'key-Bb1'],
		'key-E2': ['key-E2', 'key-G1', 'key-B1'],
		'key-F2': ['key-F2', 'key-Ab1', 'key-C2'],
		'key-Gb2': ['key-Gb2', 'key-A1', 'key-Db2'],
		'key-G2': ['key-G2', 'key-Bb1', 'key-D2'],
		'key-Ab2': ['key-Ab2', 'key-B1', 'key-Eb2'],
		'key-A2': ['key-A2', 'key-C2', 'key-E2'],
		'key-Bb2': ['key-Bb2', 'key-Db2', 'key-F2'],
		'key-B2': ['key-B2', 'key-D2', 'key-Gb2']
	},
	{
		'key-C3': ['key-C3', 'key-Eb3', 'key-G2'],
		'key-Db3': ['key-Db3', 'key-E3', 'key-Ab2'],
		'key-D3': ['key-D3', 'key-F3', 'key-A2'],
		'key-Eb3': ['key-Eb3', 'key-Gb3', 'key-Bb2'],
		'key-E3': ['key-E3', 'key-G3', 'key-B2'],
		'key-F3': ['key-F3', 'key-Ab3', 'key-C3'],
		'key-Gb3': ['key-Gb3', 'key-A3', 'key-Db3'],
		'key-G3': ['key-G3', 'key-Bb3', 'key-D3'],
		'key-Ab3': ['key-Ab3', 'key-B3', 'key-Eb3'],
		'key-A3': ['key-A3', 'key-C3', 'key-E3'],
		'key-Bb3': ['key-Bb3', 'key-Db3', 'key-F3'],
		'key-B3': ['key-B3', 'key-D3', 'key-Gb3']
	}
];

const diminishedChordKeys = [
	{
		'key-C1': ['key-C1', 'key-Eb1', 'key-Gb1'],
		'key-Db1': ['key-Db1', 'key-E1', 'key-G1'],
		'key-D1': ['key-D1', 'key-F1', 'key-Ab1'],
		'key-Eb1': ['key-Eb1', 'key-Gb1', 'key-A1'],
		'key-E1': ['key-E1', 'key-G1', 'key-Bb1'],
		'key-F1': ['key-F1', 'key-Ab1', 'key-B1'],
		'key-Gb1': ['key-Gb1', 'key-A1', 'key-C2'],
		'key-G1': ['key-G1', 'key-Bb1', 'key-Db2'],
		'key-Ab1': ['key-Ab1', 'key-B1', 'key-D2'],
		'key-A1': ['key-A1', 'key-C2', 'key-Eb2'],
		'key-Bb1': ['key-Bb1', 'key-Db2', 'key-E2'],
		'key-B1': ['key-B1', 'key-D2', 'key-F2']
	},
	{
		'key-C2': ['key-C2', 'key-Eb1', 'key-Gb1'],
		'key-Db2': ['key-Db2', 'key-E1', 'key-G1'],
		'key-D2': ['key-D2', 'key-F1', 'key-Ab1'],
		'key-Eb2': ['key-Eb2', 'key-Gb1', 'key-A1'],
		'key-E2': ['key-E2', 'key-G1', 'key-Bb1'],
		'key-F2': ['key-F2', 'key-Ab1', 'key-B1'],
		'key-Gb2': ['key-Gb2', 'key-A1', 'key-C2'],
		'key-G2': ['key-G2', 'key-Bb1', 'key-Db2'],
		'key-Ab2': ['key-Ab2', 'key-B1', 'key-D2'],
		'key-A2': ['key-A2', 'key-C2', 'key-Eb2'],
		'key-Bb2': ['key-Bb2', 'key-Db2', 'key-E2'],
		'key-B2': ['key-B2', 'key-D2', 'key-F2']
	},
	{
		'key-C3': ['key-C3', 'key-Eb3', 'key-Gb2'],
		'key-Db3': ['key-Db3', 'key-E3', 'key-G2'],
		'key-D3': ['key-D3', 'key-F3', 'key-Ab2'],
		'key-Eb3': ['key-Eb3', 'key-Gb3', 'key-A2'],
		'key-E3': ['key-E3', 'key-G3', 'key-Bb2'],
		'key-F3': ['key-F3', 'key-Ab3', 'key-B2'],
		'key-Gb3': ['key-Gb3', 'key-A3', 'key-C3'],
		'key-G3': ['key-G3', 'key-Bb3', 'key-Db3'],
		'key-Ab3': ['key-Ab3', 'key-B3', 'key-D3'],
		'key-A3': ['key-A3', 'key-C3', 'key-Eb3'],
		'key-Bb3': ['key-Bb3', 'key-Db3', 'key-E3'],
		'key-B3': ['key-B3', 'key-D3', 'key-F3']
	}
];

const chordKeys = {
	major: {
		off: {},
		partial: majorChordKeys[0],
		full: Object.assign({}, majorChordKeys[0], majorChordKeys[1], majorChordKeys[2])
	},
	minor: {
		off: {},
		partial: minorChordKeys[0],
		full: Object.assign({}, minorChordKeys[0], minorChordKeys[1], minorChordKeys[2])
	},
	diminished: {
		off: {},
		partial: diminishedChordKeys[0],
		full: Object.assign({}, diminishedChordKeys[0], diminishedChordKeys[1], diminishedChordKeys[2])
	}
};

const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const minOctave = 1;
const maxOctave = 7;

var baseOctave = 3;
var maxVolume = 1.0;
var minAttenuationFactor = 4.0;
var maxAttenuationFactor = 6.0;
var minVolumeFactor = 1.0;
var maxVolumeFactor = 4.0;
var attenuationFactor = minAttenuationFactor;
var volumeFactor = minVolumeFactor;
var midiChannel = 0;
var channels = {};
var chordMode = 'off';
var activatedKeys = {};
var shiftKey = false;
var ctrlKey = false;
var recording = false;
var recordingPlayback = false;
var recordingLength = 0;
var tempo = 120;
var metronome = null;
var transpose = 0;
var allowedInstruments = [];

// ============================================
// Utility Functions
// ============================================

function sendMessage(name, params) {
	return fetch('https://' + GetParentResourceName() + '/' + name, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	});
}

function showUi() {
	document.getElementById('ui').style.display = 'flex';
	var keyboard = document.getElementById('keyboard');
	if (keyboard) keyboard.focus();
}

function hideUi() {
	document.getElementById('ui').style.display = 'none';
}

function setAttenuationFactor(target) {
	if (attenuationFactor != target) {
		if (attenuationFactor > target) {
			attenuationFactor -= 0.1;
		} else {
			attenuationFactor += 0.1;
		}
		setTimeout(() => setAttenuationFactor(target), 5);
	}
}

function setVolumeFactor(target) {
	if (volumeFactor != target) {
		if (volumeFactor > target) {
			volumeFactor -= 0.1;
		} else {
			volumeFactor += 0.1;
		}
		setTimeout(() => setVolumeFactor(target), 5);
	}
}

function setInstrument(channel, instrument) {
	return new Promise(function(resolve, reject) {
		if (channels[channel] == instrument) {
			return resolve();
		}

		MIDI.loadResource({
			instrument: instrument,
			onsuccess: function() {
				MIDI.programChange(channel, MIDI.GM.byName[instrument].number);
				channels[channel] = instrument;
				return resolve();
			},
			onerror: function() {
				return reject();
			}
		});
	});
}

// ============================================
// Note Functions
// ============================================

function noteOn(data) {
	var noteName = `${data.note}${data.octave}`;
	var note = MIDI.keyToNote[noteName];

	if (data.sameRoom) {
		setAttenuationFactor(minAttenuationFactor);
		setVolumeFactor(minVolumeFactor);
	} else {
		setAttenuationFactor(maxAttenuationFactor);
		setVolumeFactor(maxVolumeFactor);
	}

	var volume = ((127 - data.distance * attenuationFactor) / volumeFactor) * maxVolume;

	if (data.instrument) {
		setInstrument(data.channel, data.instrument).then(() => {
			MIDI.programChange(data.channel, MIDI.GM.byName[data.instrument].number);
			MIDI.setVolume(data.channel, volume);
			MIDI.noteOn(data.channel, note, 127, 0);
		});
	} else {
		MIDI.setVolume(data.channel, volume);
		MIDI.noteOn(data.channel, note, 127, 0);
	}
}

function noteOff(data) {
	var noteName = `${data.note}${data.octave}`;
	var note = MIDI.keyToNote[noteName];
	MIDI.noteOff(data.channel, note, 0);
}

function midiNoteName(note) {
	return notes[note % 12];
}

function midiNoteOctave(note) {
	return Math.floor(note / 12 - 1);
}

function midiNoteToKey(note) {
	var noteName = midiNoteName(note);
	var octave = midiNoteOctave(note);
	return document.getElementById(`key-${noteName}${octave - baseOctave + 1}`);
}

function sendNoteOn(channel, note, octave, echo) {
	var instrument;

	if (channels[channel]) {
		instrument = channels[channel];
	} else {
		var instrumentSelect = document.getElementById('instrument');
		if (instrumentSelect) {
			instrument = instrumentSelect.value;
		} else {
			instrument = allowedInstruments[0] || 'acoustic_grand_piano';
		}
	}

	if (transpose != 0) {
		var noteName = `${note}${octave}`;
		var midiNote = MIDI.keyToNote[noteName] + transpose;
		note = midiNoteName(midiNote);
		octave = midiNoteOctave(midiNote);
	}

	sendMessage('noteOn', {
		channel: channel,
		instrument: instrument,
		note: note,
		octave: octave
	});

	if (echo) {
		noteOn({
			channel: channel,
			instrument: instrument,
			note: note,
			octave: octave,
			distance: 0,
			sameRoom: true,
		});
	}
}

function sendNoteOff(channel, note, octave, echo) {
	if (transpose != 0) {
		var noteName = `${note}${octave}`;
		var midiNote = MIDI.keyToNote[noteName] + transpose;
		note = midiNoteName(midiNote);
		octave = midiNoteOctave(midiNote);
	}

	sendMessage('noteOff', {
		channel: channel,
		note: note,
		octave: octave
	});

	if (echo) {
		noteOff({
			channel: channel,
			note: note,
			octave: octave
		});
	}
}

function highlightKey(key, own) {
	if (!key) return;
	if (own) {
		key.style.fill = '#f00';
	} else {
		key.style.fill = '#faa';
	}
}

function unhighlightKey(key) {
	if (!key) return;
	key.style.fill = null;
}

function recvNoteOn(data) {
	noteOn(data);

	if (data.channel == midiChannel) {
		var noteName = `${data.note}${data.octave}`;
		var note = MIDI.keyToNote[noteName];
		var key = midiNoteToKey(note);
		if (key) {
			highlightKey(key, false);
		}
	}
}

function recvNoteOff(data) {
	noteOff(data);

	if (data.channel == midiChannel) {
		var noteName = `${data.note}${data.octave}`;
		var note = MIDI.keyToNote[noteName];
		var key = midiNoteToKey(note);
		if (key) {
			unhighlightKey(key);
		}
	}
}

function activateKey(key, echo) {
	if (!key || activatedKeys[key.id]) {
		return;
	}

	var note = key.getAttribute('data-note');
	var octave = key.getAttribute('data-octave');
	octave = parseInt(octave) + baseOctave;

	sendNoteOn(midiChannel, note, octave, echo);
	highlightKey(key, true);
	activatedKeys[key.id] = true;
}

function deactivateKey(key, echo) {
	if (!key || !activatedKeys[key.id]) {
		return;
	}

	var note = key.getAttribute('data-note');
	var octave = key.getAttribute('data-octave');
	octave = parseInt(octave) + baseOctave;

	sendNoteOff(midiChannel, note, octave, echo);
	unhighlightKey(key);
	activatedKeys[key.id] = false;
}

// ============================================
// Soundfont & Instrument Setup
// ============================================

function setSoundfont(soundfontUrl, instrumentsUrl, configInstruments) {
	if (configInstruments && configInstruments.length > 0) {
		allowedInstruments = configInstruments;
		
		var select = document.getElementById('instrument');
		if (select) {
			select.innerHTML = '';
			configInstruments.forEach(instrument => {
				var option = document.createElement('option');
				option.value = instrument;
				option.innerHTML = instrument;
				select.appendChild(option);
			});
		}

		MIDI.soundfontUrl = soundfontUrl;
		
		MIDI.loadPlugin({
			soundfontUrl: soundfontUrl,
			instrument: configInstruments[0],
			onsuccess: function() {
				console.log('MIDI plugin loaded with instrument:', configInstruments[0]);
			}
		});
	} else {
		fetch(instrumentsUrl).then(resp => resp.json()).then(resp => {
			allowedInstruments = resp;
			
			var select = document.getElementById('instrument');
			if (select) {
				select.innerHTML = '';
				resp.forEach(instrument => {
					var option = document.createElement('option');
					option.value = instrument;
					option.innerHTML = instrument;
					select.appendChild(option);
				});
			}

			MIDI.loadPlugin({
				soundfontUrl: soundfontUrl,
				instrument: resp[0]
			});
		});
	}

	MIDI.Player.addListener(function(data) {
		var minNote = 36;
		var maxNote = 96;
		
		if (data.note < minNote || data.note > maxNote) {
			return;
		}
		
		var key = midiNoteToKey(data.note);
		var noteName = midiNoteName(data.note);
		var octave = midiNoteOctave(data.note);

		switch (data.message) {
			case 128:
				if (key && data.channel == midiChannel) {
					deactivateKey(key, false);
				}
				sendNoteOff(midiChannel, noteName, octave, true);
				break;
			case 144:
				if (data.velocity > 0) {
					if (key && data.channel == midiChannel) {
						activateKey(key, false);
					}
					sendNoteOn(midiChannel, noteName, octave, true);
				} else {
					if (key && data.channel == midiChannel) {
						deactivateKey(key, false);
					}
					sendNoteOff(midiChannel, noteName, octave, true);
				}
				break;
		}
	});
}

function setInstrumentPreset(data) {
	var instrumentSelect = document.getElementById('instrument');
	if (instrumentSelect) {
		instrumentSelect.value = data.instrument;
	}
	setInstrument(midiChannel, data.instrument);
}

// ============================================
// Time & Recording Functions
// ============================================

function timeToString(time) {
	var secs = time / 1000;
	var h = Math.floor(secs / 3600);
	var m = Math.floor(secs / 60) % 60;
	var s = Math.floor(secs) % 60;
	return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function updateMidiPlayTime() {
	var timeEl = document.getElementById('time');
	if (timeEl) {
		timeEl.innerHTML = timeToString(MIDI.Player.currentTime) + '/' + timeToString(MIDI.Player.endTime);
	}

	if (MIDI.Player.playing) {
		setTimeout(updateMidiPlayTime, 1000);
	}
}

function updateRecordingTime() {
	if (recording) {
		var timeEl = document.getElementById('time');
		if (timeEl) {
			timeEl.innerHTML = '00:00:00/' + timeToString(Date.now() - recording);
		}
		setTimeout(updateRecordingTime, 1000);
	}
}

function updateRecordingPlaybackTime() {
	if (recordingPlayback) {
		var time = Date.now() - recordingPlayback;
		var timeEl = document.getElementById('time');

		if (time <= recordingLength) {
			if (timeEl) {
				timeEl.innerHTML = timeToString(time) + '/' + timeToString(recordingLength);
			}
			setTimeout(updateRecordingPlaybackTime, 1000);
		} else {
			stopRecordingPlayback();
		}
	}
}

function startRecording() {
	sendMessage('startRecording', {}).then(() => {
		recording = Date.now();
		var recordBtn = document.getElementById('record');
		if (recordBtn) recordBtn.style.color = 'red';
		updateRecordingTime();
	});
}

function stopRecording() {
	sendMessage('stopRecording').then(resp => resp.json()).then(data => {
		recordingLength = data.length;

		var timeEl = document.getElementById('time');
		if (timeEl) {
			timeEl.innerHTML = '00:00:00/' + timeToString(recordingLength);
		}
		
		var recordBtn = document.getElementById('record');
		if (recordBtn) recordBtn.style.color = null;

		recording = false;
		recordingPlayback = false;
	});
}

function eraseRecording() {
	sendMessage('eraseRecording', {}).then(() => {
		recording = false;
		recordingPlayback = false;
		recordingLength = 0;
		
		var timeEl = document.getElementById('time');
		if (timeEl) timeEl.innerHTML = '00:00:00/00:00:00';
		
		var recordBtn = document.getElementById('record');
		if (recordBtn) recordBtn.style.color = null;
	});
}

function startRecordingPlayback() {
	sendMessage('playbackRecording');
	recordingPlayback = Date.now();
	if (!recording) {
		updateRecordingPlaybackTime();
	}
}

function stopRecordingPlayback() {
	sendMessage('stopRecording', {}).then(() => {
		recordingPlayback = false;
		var timeEl = document.getElementById('time');
		if (timeEl) {
			timeEl.innerHTML = '00:00:00/' + timeToString(recordingLength);
		}
	});
}

function toggleMetronome() {
	if (!metronome) return;
	
	var metronomeBtn = document.getElementById('metronome');
	
	if (metronome.isRunning) {
		metronome.stop();
		if (metronomeBtn) metronomeBtn.style.color = null;
	} else {
		metronome.start();
		if (metronomeBtn) metronomeBtn.style.color = 'red';
	}
}

function toggleRecording() {
	if (recording) {
		stopRecording();
	} else {
		startRecording();
	}
}

// ============================================
// MIDI Playback - WITH PROXY FOR EXTERNAL URLs
// ============================================

function play() {
	const midiInput = document.getElementById('url');
	if (!midiInput) return;

	let midiUrl = midiInput.value.trim();
	if (!midiUrl) return;

	console.log("[Piano] Попытка загрузки:", midiUrl);

	if (MIDI.Player.playing) {
		MIDI.Player.stop();
	}

	// Проверяем, является ли это внешним URL
	if (midiUrl.startsWith('http://') || midiUrl.startsWith('https://')) {
		console.log("[Piano] Внешний URL, загружаем через Lua прокси...");
		
		// Загружаем через серверный прокси (обход CORS)
		fetch('https://' + GetParentResourceName() + '/downloadMidi', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ url: midiUrl })
		})
		.then(resp => resp.json())
		.then(result => {
			if (result.success && result.data) {
				console.log("[Piano] Файл загружен через прокси, размер:", result.data.length, "байт");
				
				// Конвертируем массив байтов обратно в бинарные данные
				const bytes = new Uint8Array(result.data);
				
				// Создаем Blob и URL
				const blob = new Blob([bytes], { type: 'audio/midi' });
				const blobUrl = URL.createObjectURL(blob);
				
				console.log("[Piano] Blob URL создан");
				loadAndPlayMidi(blobUrl);
			} else {
				console.error("[Piano] Ошибка загрузки через прокси:", result.error);
			}
		})
		.catch(error => {
			console.error("[Piano] Ошибка fetch:", error);
		});
	} else {
		// Локальный файл
		loadAndPlayMidi(midiUrl);
	}
}

function loadAndPlayMidi(url) {
	console.log("[Piano] Загрузка MIDI из:", url);
	
	MIDI.Player.loadFile(url, function() {
		console.log("[Piano] MIDI файл загружен успешно!");
		
		// Получаем текущий выбранный инструмент
		var currentInstrument = channels[midiChannel];
		
		if (!currentInstrument) {
			var instrumentSelect = document.getElementById('instrument');
			if (instrumentSelect && instrumentSelect.value) {
				currentInstrument = instrumentSelect.value;
			} else if (allowedInstruments.length > 0) {
				currentInstrument = allowedInstruments[0];
			}
		}
		
		if (currentInstrument) {
			var promises = [];
			for (var i = 0; i < 16; ++i) {
				promises.push(setInstrument(i, currentInstrument));
			}
			
			Promise.all(promises).then(() => {
				for (var i = 0; i < 16; ++i) {
					MIDI.programChange(i, MIDI.GM.byName[currentInstrument].number);
				}
				startMidiPlayback();
			});
		} else {
			var instruments = MIDI.Player.getFileInstruments();
			var promises = [];

			for (var i = 0; i < instruments.length; ++i) {
				promises.push(setInstrument(i, instruments[i]));
			}

			Promise.all(promises).then(() => {
				startMidiPlayback();
			});
		}
	}, null, function(err) {
		console.error("[Piano] Ошибка загрузки MIDI файла");
		console.error("URL:", url);
		console.error("Ошибка:", err);
		
		if (url.startsWith('blob:')) {
			URL.revokeObjectURL(url);
		}
	});
}

function startMidiPlayback() {
	if (MIDI.getContext && MIDI.getContext().state === 'suspended') {
		MIDI.getContext().resume().then(() => {
			updateMidiPlayTime();
			MIDI.Player.start();
			console.log("[Piano] Воспроизведение начато (после resume)");
		});
	} else {
		updateMidiPlayTime();
		MIDI.Player.start();
		console.log("[Piano] Воспроизведение начато");
	}
}

// ============================================
// Chord Functions
// ============================================

function getChordKeys(event) {
	if (shiftKey) {
		return chordKeys['minor'][chordMode];
	} else if (ctrlKey) {
		return chordKeys['diminished'][chordMode];
	} else {
		return chordKeys['major'][chordMode];
	}
}

function pressKey(key, event) {
	if (!key) return;
	
	var chordKeysList = getChordKeys(event)[key.id];

	if (chordKeysList) {
		chordKeysList.forEach(keyId => activateKey(document.getElementById(keyId), true));
	} else {
		activateKey(key, true);
	}
}

function releaseKey(key, event) {
	if (!key) return;
	
	var chordKeysList = getChordKeys(event)[key.id];

	if (chordKeysList) {
		chordKeysList.forEach(keyId => deactivateKey(document.getElementById(keyId), true));
	} else {
		deactivateKey(key, true);
	}
}

function cycleChordMode() {
	switch (chordMode) {
		case 'off':
			chordMode = 'partial';
			break;
		case 'partial':
			chordMode = 'full';
			break;
		case 'full':
			chordMode = 'off';
			break;
	}

	var chordsSelect = document.getElementById('chords');
	if (chordsSelect) chordsSelect.value = chordMode;
}

// ============================================
// Instrument Display Names
// ============================================

var instrumentNames = {
	'piano': 'Piano',
	'trumpet': 'Trumpet',
	'guitar': 'Guitar',
	'harp': 'Harp',
	'harmonica': 'Harmonica',
	'concertina': 'Concertina',
	'banjo': 'Banjo',
	'fiddle': 'Fiddle'
};

function getInstrumentDisplayName(instrument) {
	return instrumentNames[instrument] || instrument;
}

function populateInteractions(instruments) {
	var interactionSelect = document.getElementById('interaction');
	if (!interactionSelect) {
		console.warn('[Piano] Element #interaction not found');
		return;
	}

	interactionSelect.innerHTML = '';

	if (instruments && instruments.length > 0) {
		instruments.forEach(instrument => {
			var option = document.createElement('option');
			option.value = instrument;
			option.innerHTML = getInstrumentDisplayName(instrument);
			interactionSelect.appendChild(option);
		});
	}
}

// ============================================
// Message Handlers
// ============================================

window.addEventListener('message', event => {
	switch (event.data.type) {
		case 'showUi':
			showUi();
			break;
		case 'hideUi':
			hideUi();
			break;
		case 'noteOn':
			recvNoteOn(event.data);
			break;
		case 'noteOff':
			recvNoteOff(event.data);
			break;
		case 'setInstrumentPreset':
			setInstrumentPreset(event.data);
			break;
	}
});

// ============================================
// Initialization
// ============================================

window.addEventListener('load', event => {
	sendMessage('init', {}).then(resp => resp.json()).then(resp => {
		baseOctave = resp.baseOctave;
		
		var octaveInput = document.getElementById('octave');
		if (octaveInput) octaveInput.value = baseOctave;

		maxVolume = resp.maxVolume;
		minAttenuationFactor = resp.minAttenuationFactor;
		maxAttenuationFactor = resp.maxAttenuationFactor;
		attenuationFactor = minAttenuationFactor;
		minVolumeFactor = resp.minVolumeFactor;
		maxVolumeFactor = resp.maxVolumeFactor;
		volumeFactor = minVolumeFactor;

		setSoundfont(resp.soundfontUrl, resp.instrumentsUrl, resp.midiInstruments);

		var tempoInput = document.getElementById('tempo');
		if (tempoInput) tempoInput.value = tempo;
		
		if (typeof Metronome !== 'undefined') {
			metronome = new Metronome(tempo);
		}

		populateInteractions(resp.instruments);
	}).catch(err => {
		console.error('[Piano] Init error:', err);
	});

	// Piano keys event listeners
	document.querySelectorAll('.piano-key').forEach(key => {
		key.addEventListener('mousedown', function(event) {
			pressKey(this, event);
		});
		key.addEventListener('mouseup', function(event) {
			releaseKey(this, event);
		});
		key.addEventListener('mouseout', function(event) {
			releaseKey(this, event);
		});
	});

	// Safe event listener attachment with null checks
	var closeBtn = document.getElementById('close');
	if (closeBtn) {
		closeBtn.addEventListener('click', function(event) {
			sendMessage('closeUi', {});
		});
	}

	var octaveInput = document.getElementById('octave');
	if (octaveInput) {
		octaveInput.addEventListener('input', function(event) {
			var octave = parseInt(this.value);
			if (!isNaN(octave) && octave >= minOctave && octave <= maxOctave) {
				baseOctave = octave;
			}
			this.value = baseOctave;
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var tempoInput = document.getElementById('tempo');
	if (tempoInput) {
		tempoInput.addEventListener('input', function(event) {
			var t = parseInt(this.value);
			if (!isNaN(t) && t >= 30 && t <= 400) {
				var running = metronome && metronome.isRunning;
				tempo = t;
				if (metronome) metronome.stop();
				if (typeof Metronome !== 'undefined') {
					metronome = new Metronome(tempo);
					if (running) metronome.start();
				}
			}
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var playBtn = document.getElementById('play');
	if (playBtn) {
		playBtn.addEventListener('click', function(event) {
			play();
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var stopBtn = document.getElementById('stop');
	if (stopBtn) {
		stopBtn.addEventListener('click', function(event) {
			if (MIDI.Player.playing) {
				MIDI.Player.stop();
			} else if (recording) {
				stopRecording();
			} else {
				stopRecordingPlayback();
			}
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var recordBtn = document.getElementById('record');
	if (recordBtn) {
		recordBtn.addEventListener('click', function(event) {
			toggleRecording();
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var eraseBtn = document.getElementById('erase');
	if (eraseBtn) {
		eraseBtn.addEventListener('click', function(event) {
			eraseRecording();
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var startInteractionBtn = document.getElementById('start-interaction');
	if (startInteractionBtn) {
		startInteractionBtn.addEventListener('click', function(event) {
			var interactionSelect = document.getElementById('interaction');
			if (interactionSelect) {
				sendMessage('startPlayingInstrument', {
					instrument: interactionSelect.value
				});
			}
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var stopInteractionBtn = document.getElementById('stop-interaction');
	if (stopInteractionBtn) {
		stopInteractionBtn.addEventListener('click', function(event) {
			sendMessage('stopPlayingInstrument', {});
			var keyboard = document.getElementById('keyboard');
			if (keyboard) keyboard.focus();
		});
	}

	var helpBtn = document.getElementById('help-button');
	if (helpBtn) {
		helpBtn.addEventListener('click', function(event) {
			var helpDiv = document.getElementById('help');
			if (helpDiv) helpDiv.style.display = 'flex';
		});
	}

	var closeHelpBtn = document.getElementById('close-help');
	if (closeHelpBtn) {
		closeHelpBtn.addEventListener('click', function(event) {
			var helpDiv = document.getElementById('help');
			if (helpDiv) helpDiv.style.display = 'none';
		});
	}

	var keyboard = document.getElementById('keyboard');
	if (keyboard) {
		keyboard.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case 33: // Page Down
					if (baseOctave < maxOctave) {
						++baseOctave;
						var octaveInput = document.getElementById('octave');
						if (octaveInput) octaveInput.value = baseOctave;
					}
					break;
				case 34: // Page Up
					if (baseOctave > minOctave) {
						--baseOctave;
						var octaveInput = document.getElementById('octave');
						if (octaveInput) octaveInput.value = baseOctave;
					}
					break;
				case 36:
					if (transpose < 127) ++transpose;
					break;
				case 35:
					if (transpose > -127) --transpose;
					break;
				case 45: // Insert
					if (midiChannel < 15) ++midiChannel;
					break;
				case 46: // Delete
					if (midiChannel > 0) --midiChannel;
					break;
				default:
					var key = keys[event.keyCode];
					if (key) {
						pressKey(document.getElementById(key), event);
					}
					break;
			}
		});

		keyboard.addEventListener('keyup', event => {
			switch (event.keyCode) {
				case 32: // Space
					play();
					break;
				case 220: // Backslash
					toggleRecording();
					break;
				default:
					var key = keys[event.keyCode];
					if (key) {
						releaseKey(document.getElementById(key), event);
					}
					break;
			}
		});
	}
});

window.addEventListener('keydown', event => {
	switch (event.keyCode) {
		case 16: shiftKey = true; break;
		case 17: ctrlKey = true; break;
	}
});

window.addEventListener('keyup', event => {
	switch (event.keyCode) {
		case 16: shiftKey = false; break;
		case 17: ctrlKey = false; break;
	}
});