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
		'key-C2': ['key-C2', 'key-E2', 'key-G2'],
		'key-Db2': ['key-Db2', 'key-F2', 'key-Ab2'],
		'key-D2': ['key-D2', 'key-Gb2', 'key-A2'],
		'key-Eb2': ['key-Eb2', 'key-G2', 'key-Bb2'],
		'key-E2': ['key-E2', 'key-Ab2', 'key-B2'],
		'key-F2': ['key-F2', 'key-A2', 'key-C3'],
		'key-Gb2': ['key-Gb2', 'key-Bb2', 'key-Db3'],
		'key-G2': ['key-G2', 'key-B2', 'key-D3'],
		'key-Ab2': ['key-Ab2', 'key-C3', 'key-Eb3'],
		'key-A2': ['key-A2', 'key-Db3', 'key-E3'],
		'key-Bb2': ['key-Bb2', 'key-D3', 'key-F3'],
		'key-B2': ['key-B2', 'key-Eb3', 'key-Gb3']
	},
	{
		'key-C3': ['key-C3', 'key-E3', 'key-G3'],
		'key-Db3': ['key-Db3', 'key-F3', 'key-Ab3'],
		'key-D3': ['key-D3', 'key-Gb3', 'key-A3'],
		'key-Eb3': ['key-Eb3', 'key-G3', 'key-Bb3'],
		'key-E3': ['key-E3', 'key-Ab3', 'key-B3'],
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
		'key-C2': ['key-C2', 'key-Eb2', 'key-G2'],
		'key-Db2': ['key-Db2', 'key-E2', 'key-Ab2'],
		'key-D2': ['key-D2', 'key-F2', 'key-A2'],
		'key-Eb2': ['key-Eb2', 'key-Gb2', 'key-Bb2'],
		'key-E2': ['key-E2', 'key-G2', 'key-B2'],
		'key-F2': ['key-F2', 'key-Ab2', 'key-C3'],
		'key-Gb2': ['key-Gb2', 'key-A2', 'key-Db3'],
		'key-G2': ['key-G2', 'key-Bb2', 'key-D3'],
		'key-Ab2': ['key-Ab2', 'key-B2', 'key-Eb3'],
		'key-A2': ['key-A2', 'key-C3', 'key-E3'],
		'key-Bb2': ['key-Bb2', 'key-Db3', 'key-F3'],
		'key-B2': ['key-B2', 'key-D3', 'key-Gb3']
	},
	{
		'key-C3': ['key-C3', 'key-Eb3', 'key-G3'],
		'key-Db3': ['key-Db3', 'key-E3', 'key-Ab3'],
		'key-D3': ['key-D3', 'key-F3', 'key-A3'],
		'key-Eb3': ['key-Eb3', 'key-Gb3', 'key-Bb3'],
		'key-E3': ['key-E3', 'key-G3', 'key-B3'],
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
		'key-C2': ['key-C2', 'key-Eb2', 'key-Gb2'],
		'key-Db2': ['key-Db2', 'key-E2', 'key-G2'],
		'key-D2': ['key-D2', 'key-F2', 'key-Ab2'],
		'key-Eb2': ['key-Eb2', 'key-Gb2', 'key-A2'],
		'key-E2': ['key-E2', 'key-G2', 'key-Bb2'],
		'key-F2': ['key-F2', 'key-Ab2', 'key-B2'],
		'key-Gb2': ['key-Gb2', 'key-A2', 'key-C3'],
		'key-G2': ['key-G2', 'key-Bb2', 'key-Db3'],
		'key-Ab2': ['key-Ab2', 'key-B2', 'key-D3'],
		'key-A2': ['key-A2', 'key-C3', 'key-Eb3'],
		'key-Bb2': ['key-Bb2', 'key-Db3', 'key-E3'],
		'key-B2': ['key-B2', 'key-D3', 'key-F3']
	},
	{
		'key-C3': ['key-C3', 'key-Eb3', 'key-Gb3'],
		'key-Db3': ['key-Db3', 'key-E3', 'key-G3'],
		'key-D3': ['key-D3', 'key-F3', 'key-Ab3'],
		'key-Eb3': ['key-Eb3', 'key-Gb3', 'key-A3'],
		'key-E3': ['key-E3', 'key-G3', 'key-Bb3'],
		'key-F3': ['key-F3', 'key-Ab3', 'key-B3'],
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
const defaultOctave = 3;

var baseOctave = 3;
var maxVolume = 1.0;
var playbackVolume = 100;
var masterVolume = 1.0;
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

// MIDI playback
var midiIsPlaying = false;
var midiTimeUpdateInterval = null;

// Session/Join
var joinedSession = null;
var isHostingSession = false;
var currentMidiUrl = null;

// Network throttling
var pendingNotes = [];
var noteThrottleTimer = null;
var NOTE_THROTTLE_INTERVAL = 100;
var MAX_NOTES_PER_BATCH = 5;

function getMidiTranspose() {
	return (baseOctave - defaultOctave) * 12;
}

// ============================================
// Volume Functions
// ============================================

function setPlaybackVolume(volumePercent) {
	playbackVolume = volumePercent;
	masterVolume = volumePercent / 100;
	
	var volumeDisplay = document.getElementById('volume-display');
	if (volumeDisplay) {
		volumeDisplay.innerHTML = volumePercent + '%';
	}
	
	applyVolumeToAllChannels();
	console.log('[Piano] Volume set to:', volumePercent + '%');
}

function applyVolumeToAllChannels() {
	if (typeof MIDI !== 'undefined' && MIDI.setVolume) {
		for (var i = 0; i < 16; i++) {
			MIDI.setVolume(i, Math.round(127 * masterVolume));
		}
	}
}

function getVolumeMultiplier() {
	return masterVolume;
}

// ============================================
// Tempo/BPM Functions
// ============================================

function applyTempo() {
	var timeWarp = 120 / tempo;
	
	if (typeof MIDI !== 'undefined' && typeof MIDI.Player !== 'undefined') {
		MIDI.Player.timeWarp = timeWarp;
		console.log('[Piano] timeWarp set to:', timeWarp, '(BPM:', tempo + ')');
	}
}

// ============================================
// Network Functions
// ============================================

function sendMessage(name, params) {
	return fetch('https://' + GetParentResourceName() + '/' + name, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(params)
	});
}

function queueNoteForSending(noteData) {
	pendingNotes.push(noteData);
	if (pendingNotes.length > 50) {
		pendingNotes = pendingNotes.slice(-25);
	}
	if (!noteThrottleTimer) {
		noteThrottleTimer = setTimeout(sendPendingNotes, NOTE_THROTTLE_INTERVAL);
	}
}

function sendPendingNotes() {
	noteThrottleTimer = null;
	if (pendingNotes.length === 0) return;
	
	var notesToSend = pendingNotes.splice(0, MAX_NOTES_PER_BATCH);
	
	notesToSend.forEach((note, index) => {
		setTimeout(() => {
			if (note.type === 'on') {
				sendMessage('noteOn', {
					channel: note.channel,
					instrument: note.instrument,
					note: note.note,
					octave: note.octave,
					velocity: note.velocity
				}).catch(() => {});
			} else {
				sendMessage('noteOff', {
					channel: note.channel,
					note: note.note,
					octave: note.octave
				}).catch(() => {});
			}
		}, index * 20);
	});
	
	if (pendingNotes.length > 0) {
		noteThrottleTimer = setTimeout(sendPendingNotes, NOTE_THROTTLE_INTERVAL);
	}
}

function clearPendingNotes() {
	pendingNotes = [];
	if (noteThrottleTimer) {
		clearTimeout(noteThrottleTimer);
		noteThrottleTimer = null;
	}
}

// ============================================
// Session/Join Functions
// ============================================

function toggleJoinSession() {
	if (joinedSession) {
		leaveSession();
	} else {
		joinNearestSession();
	}
}

function joinNearestSession() {
	var joinBtn = document.getElementById('join-session');
	if (joinBtn) {
		joinBtn.textContent = '...';
		joinBtn.disabled = true;
	}
	
	console.log('[Piano] Requesting nearest session...');
	
	sendMessage('joinNearestSession', {})
		.then(resp => resp.text())
		.then(text => {
			console.log('[Piano] Raw response:', text);
			
			if (joinBtn) {
				joinBtn.disabled = false;
			}
			
			if (!text || text.trim() === '') {
				console.log('[Piano] No session available (empty response)');
				if (joinBtn) joinBtn.textContent = 'JOIN';
				return;
			}
			
			let result;
			try {
				result = JSON.parse(text);
			} catch (e) {
				console.error('[Piano] Invalid JSON:', text);
				if (joinBtn) joinBtn.textContent = 'JOIN';
				return;
			}
			
			console.log('[Piano] Parsed result:', result);
			console.log('[Piano] Position from server:', result.position, 'ms');
			
			if (result.success) {
				joinedSession = result.playerId;
				
				if (joinBtn) {
					joinBtn.textContent = 'LEAVE';
					joinBtn.classList.add('joined');
				}
				
				if (result.midiUrl) {
					var urlInput = document.getElementById('url');
					if (urlInput) urlInput.value = result.midiUrl;
					
					console.log('[Piano] Loading MIDI from:', result.midiUrl);
					console.log('[Piano] Start position:', result.position);
					
					loadAndPlayMidiFromUrl(result.midiUrl, result.position || 0);
				}
			} else {
				if (joinBtn) joinBtn.textContent = 'JOIN';
				console.log('[Piano] No session:', result.error);
			}
		})
		.catch(err => {
			console.error('[Piano] Error:', err);
			if (joinBtn) {
				joinBtn.textContent = 'JOIN';
				joinBtn.disabled = false;
			}
		});
}
function leaveSession() {
	joinedSession = null;
	
	var joinBtn = document.getElementById('join-session');
	if (joinBtn) {
		joinBtn.textContent = 'JOIN';
		joinBtn.classList.remove('joined');
	}
	
	sendMessage('leaveSession', {}).catch(() => {});
	
	if (MIDI.Player.playing) {
		MIDI.Player.stop();
	}
	midiIsPlaying = false;
	
	if (midiTimeUpdateInterval) {
		clearInterval(midiTimeUpdateInterval);
		midiTimeUpdateInterval = null;
	}
	
	document.querySelectorAll('.piano-key').forEach(key => {
		key.style.fill = null;
	});
	
	var timeEl = document.getElementById('time');
	if (timeEl) {
		timeEl.innerHTML = '00:00:00/00:00:00';
	}
	
	console.log('[Piano] Left session');
}

function startHostingSession(midiUrl) {
	currentMidiUrl = midiUrl;
	isHostingSession = true;
	
	sendMessage('startMidiSession', {
		midiUrl: midiUrl
	}).catch(err => {
		console.error('[Piano] Error starting session:', err);
	});
}

function stopHostingSession() {
	if (!isHostingSession) return;
	
	isHostingSession = false;
	currentMidiUrl = null;
	
	sendMessage('stopMidiSession', {}).catch(() => {});
}

function updateSessionPosition() {
	if (isHostingSession && MIDI.Player.playing) {
		sendMessage('updateMidiPosition', {
			position: MIDI.Player.currentTime
		}).catch(() => {});
	}
}

function loadAndPlayMidiFromUrl(midiUrl, startPosition) {
	console.log("[Piano] === loadAndPlayMidiFromUrl ===");
	console.log("[Piano] URL:", midiUrl);
	console.log("[Piano] startPosition:", startPosition, "type:", typeof startPosition);
	
	if (MIDI.Player.playing) {
		MIDI.Player.stop();
	}
	clearPendingNotes();
	
	if (midiUrl.startsWith('http://') || midiUrl.startsWith('https://')) {
		fetch('https://' + GetParentResourceName() + '/downloadMidi', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ url: midiUrl })
		})
		.then(resp => resp.json())
		.then(result => {
			if (result.success && result.data) {
				const bytes = new Uint8Array(result.data);
				const blob = new Blob([bytes], { type: 'audio/midi' });
				const blobUrl = URL.createObjectURL(blob);
				loadMidiAndSeek(blobUrl, startPosition);
			} else {
				console.error("[Piano] Proxy error:", result.error);
			}
		})
		.catch(error => console.error("[Piano] Fetch error:", error));
	} else {
		loadMidiAndSeek(midiUrl, startPosition);
	}
}

function loadMidiAndSeek(url, startPosition) {
	console.log("[Piano] === loadMidiAndSeek ===");
	console.log("[Piano] Loading from:", url);
	console.log("[Piano] Initial position hint:", startPosition);
	
	MIDI.Player.loadFile(url, function() {
		console.log("[Piano] File loaded!");
		console.log("[Piano] Duration:", MIDI.Player.endTime, "ms");
		
		// Устанавливаем инструмент
		var currentInstrument = channels[midiChannel];
		if (!currentInstrument) {
			var instrumentSelect = document.getElementById('instrument');
			currentInstrument = instrumentSelect?.value || allowedInstruments[0];
		}
		
		if (currentInstrument) {
			for (var i = 0; i < 16; i++) {
				setInstrument(i, currentInstrument);
				if (MIDI.GM.byName[currentInstrument]) {
					MIDI.programChange(i, MIDI.GM.byName[currentInstrument].number);
				}
			}
		}
		
		applyVolumeToAllChannels();
		applyTempo();
		
		// ВАЖНО: Запрашиваем АКТУАЛЬНУЮ позицию после загрузки файла!
console.log("[Piano] Requesting current position from server...");

var requestStartTime = Date.now();

fetch('https://' + GetParentResourceName() + '/getCurrentSessionPosition', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({})
})
.then(resp => resp.text())
.then(text => {
	var requestTime = Date.now() - requestStartTime;
	var actualPosition = startPosition;
	
	if (text && text.trim() !== '') {
		try {
			var result = JSON.parse(text);
			if (result.success && result.position > 0) {
				actualPosition = result.position;
				console.log("[Piano] Got actual position from server:", actualPosition);
			}
		} catch(e) {
			console.log("[Piano] Could not parse position response, using initial");
		}
	}
	
	// Компенсируем время запроса (половина round-trip)
	var compensation = Math.round(requestTime / 2);
	actualPosition = actualPosition + compensation;
	
	console.log("[Piano] Request took:", requestTime, "ms, compensation:", compensation, "ms");
	console.log("[Piano] Starting at position:", actualPosition);
	
	if (actualPosition > 0 && actualPosition < MIDI.Player.endTime) {
		MIDI.Player.currentTime = actualPosition;
	}
	
	MIDI.Player.start();
	midiIsPlaying = true;
	
	console.log("[Piano] Playback started at:", MIDI.Player.currentTime);
	
	midiTimeUpdateInterval = setInterval(updateMidiTime, 500);
})
.catch(err => {
	console.log("[Piano] Position request failed, using initial:", startPosition);
	
	if (startPosition > 0 && startPosition < MIDI.Player.endTime) {
		MIDI.Player.currentTime = startPosition;
	}
	
	MIDI.Player.start();
	midiIsPlaying = true;
	midiTimeUpdateInterval = setInterval(updateMidiTime, 500);
});
		
	}, null, function(err) {
		console.error("[Piano] Load error:", err);
	});
}

function loadMidiFileAndStart(url, startPosition) {
	MIDI.Player.loadFile(url, function() {
		console.log("[Piano] File loaded, seeking to:", startPosition, "ms");
		
		var currentInstrument = channels[midiChannel];
		if (!currentInstrument) {
			var instrumentSelect = document.getElementById('instrument');
			currentInstrument = instrumentSelect?.value || allowedInstruments[0];
		}
		
		if (currentInstrument) {
			for (var i = 0; i < 16; i++) {
				setInstrument(i, currentInstrument);
				if (MIDI.GM.byName[currentInstrument]) {
					MIDI.programChange(i, MIDI.GM.byName[currentInstrument].number);
				}
			}
		}
		
		applyVolumeToAllChannels();
		applyTempo();
		
		// Запускаем воспроизведение
		MIDI.Player.start();
		midiIsPlaying = true;
		
		// ВАЖНО: Перематываем ПОСЛЕ старта!
		if (startPosition > 0 && startPosition < MIDI.Player.endTime) {
			// Небольшая задержка чтобы плеер инициализировался
			setTimeout(function() {
				MIDI.Player.currentTime = startPosition;
				console.log("[Piano] Seeked to position:", startPosition);
			}, 100);
		}
		
		midiTimeUpdateInterval = setInterval(updateMidiTime, 500);
		
	}, null, function(err) {
		console.error("[Piano] Load error:", err);
	});
}

// ============================================
// Utility Functions
// ============================================

function showUi() {
	document.getElementById('ui').style.display = 'flex';
	var keyboard = document.getElementById('keyboard');
	if (keyboard) keyboard.focus();
}

function hideUi() {
	document.getElementById('ui').style.display = 'none';
	stopAllPlayback();
}

function stopAllPlayback() {
	if (MIDI.Player && MIDI.Player.playing) {
		MIDI.Player.stop();
	}
	midiIsPlaying = false;
	
	stopHostingSession();
	
	if (midiTimeUpdateInterval) {
		clearInterval(midiTimeUpdateInterval);
		midiTimeUpdateInterval = null;
	}
	
	clearPendingNotes();
	
	if (recording) {
		sendMessage('stopRecording').then(resp => resp.json()).then(data => {
			recordingLength = data.length;
			recording = false;
			recordingPlayback = false;
			var recordBtn = document.getElementById('record');
			if (recordBtn) recordBtn.style.color = null;
		}).catch(() => {});
	}
	
	if (metronome && metronome.isRunning) {
		metronome.stop();
	}
	
	document.querySelectorAll('.piano-key').forEach(key => {
		key.style.fill = null;
	});
	
	Object.keys(activatedKeys).forEach(keyId => {
		activatedKeys[keyId] = false;
	});
	
	var timeEl = document.getElementById('time');
	if (timeEl) {
		timeEl.innerHTML = '00:00:00/00:00:00';
	}
}

function setAttenuationFactor(target) {
	if (attenuationFactor != target) {
		attenuationFactor += (attenuationFactor > target) ? -0.1 : 0.1;
		setTimeout(() => setAttenuationFactor(target), 5);
	}
}

function setVolumeFactor(target) {
	if (volumeFactor != target) {
		volumeFactor += (volumeFactor > target) ? -0.1 : 0.1;
		setTimeout(() => setVolumeFactor(target), 5);
	}
}

function setInstrument(channel, instrument) {
	return new Promise(function(resolve, reject) {
		if (channels[channel] == instrument) return resolve();

		MIDI.loadResource({
			instrument: instrument,
			onsuccess: function() {
				if (MIDI.GM.byName[instrument]) {
					MIDI.programChange(channel, MIDI.GM.byName[instrument].number);
				}
				channels[channel] = instrument;
				resolve();
			},
			onerror: function() { reject(); }
		});
	});
}

// ============================================
// Note Functions
// ============================================

function midiNoteName(note) {
	return notes[note % 12];
}

function midiNoteOctave(note) {
	return Math.floor(note / 12 - 1);
}

function midiNoteToKey(note) {
	var noteName = midiNoteName(note);
	var octave = midiNoteOctave(note);
	var keyIndex = octave - baseOctave + 1;
	var keyId = `key-${noteName}${keyIndex}`;
	return document.getElementById(keyId);
}

function noteOn(data) {
	var noteName = `${data.note}${data.octave}`;
	var note = MIDI.keyToNote[noteName];
	if (note === undefined) return;

	if (data.sameRoom) {
		setAttenuationFactor(minAttenuationFactor);
		setVolumeFactor(minVolumeFactor);
	} else {
		setAttenuationFactor(maxAttenuationFactor);
		setVolumeFactor(maxVolumeFactor);
	}

	var volume = ((127 - (data.distance || 0) * attenuationFactor) / volumeFactor) * maxVolume * masterVolume;

	if (data.instrument) {
		setInstrument(data.channel, data.instrument).then(() => {
			if (MIDI.GM.byName[data.instrument]) {
				MIDI.programChange(data.channel, MIDI.GM.byName[data.instrument].number);
			}
			if (MIDI.setVolume) MIDI.setVolume(data.channel, Math.round(volume));
			MIDI.noteOn(data.channel, note, data.velocity || 127, 0);
		});
	} else {
		if (MIDI.setVolume) MIDI.setVolume(data.channel, Math.round(volume));
		MIDI.noteOn(data.channel, note, data.velocity || 127, 0);
	}
}

function noteOff(data) {
	var noteName = `${data.note}${data.octave}`;
	var note = MIDI.keyToNote[noteName];
	if (note !== undefined) {
		MIDI.noteOff(data.channel, note, 0);
	}
}

function sendNoteOn(channel, note, octave, echo, velocity) {
	var instrument = channels[channel];
	if (!instrument) {
		var instrumentSelect = document.getElementById('instrument');
		instrument = instrumentSelect ? instrumentSelect.value : (allowedInstruments[0] || 'acoustic_grand_piano');
	}

	if (transpose != 0) {
		var noteName = `${note}${octave}`;
		var midiNote = MIDI.keyToNote[noteName] + transpose;
		note = midiNoteName(midiNote);
		octave = midiNoteOctave(midiNote);
	}

	var adjustedVelocity = Math.round((velocity || 127) * masterVolume);

	sendMessage('noteOn', {
		channel: channel,
		instrument: instrument,
		note: note,
		octave: octave,
		velocity: adjustedVelocity
	});

	if (echo) {
		noteOn({
			channel: channel,
			instrument: instrument,
			note: note,
			octave: octave,
			velocity: adjustedVelocity,
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

	sendMessage('noteOff', { channel: channel, note: note, octave: octave });

	if (echo) {
		noteOff({ channel: channel, note: note, octave: octave });
	}
}

function highlightKey(key, own) {
	if (!key) return;
	key.style.fill = own ? '#f00' : '#faa';
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
		if (key) highlightKey(key, false);
	}
}

function recvNoteOff(data) {
	noteOff(data);
	if (data.channel == midiChannel) {
		var noteName = `${data.note}${data.octave}`;
		var note = MIDI.keyToNote[noteName];
		var key = midiNoteToKey(note);
		if (key) unhighlightKey(key);
	}
}

function activateKey(key, echo) {
	if (!key || activatedKeys[key.id]) return;
	var note = key.getAttribute('data-note');
	var octave = parseInt(key.getAttribute('data-octave')) + baseOctave;
	sendNoteOn(midiChannel, note, octave, echo);
	highlightKey(key, true);
	activatedKeys[key.id] = true;
}

function deactivateKey(key, echo) {
	if (!key || !activatedKeys[key.id]) return;
	var note = key.getAttribute('data-note');
	var octave = parseInt(key.getAttribute('data-octave')) + baseOctave;
	sendNoteOff(midiChannel, note, octave, echo);
	unhighlightKey(key);
	activatedKeys[key.id] = false;
}

// ============================================
// Time Functions
// ============================================

function timeToString(time) {
	var secs = time / 1000;
	var h = Math.floor(secs / 3600);
	var m = Math.floor(secs / 60) % 60;
	var s = Math.floor(secs) % 60;
	return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function updateMidiTime() {
	if (MIDI.Player.playing) {
		var timeEl = document.getElementById('time');
		if (timeEl) {
			timeEl.innerHTML = timeToString(MIDI.Player.currentTime) + '/' + timeToString(MIDI.Player.endTime);
		}
		
		if (isHostingSession) {
			var pos = MIDI.Player.currentTime;
			console.log('[Piano] Sending position to server:', pos);
			
			sendMessage('updateMidiPosition', {
				position: pos
			}).catch(() => {});
		}
	} else if (midiIsPlaying) {
		midiIsPlaying = false;
		stopHostingSession();
		if (midiTimeUpdateInterval) {
			clearInterval(midiTimeUpdateInterval);
			midiTimeUpdateInterval = null;
		}
	}
}

function updateRecordingTime() {
	if (recording) {
		var timeEl = document.getElementById('time');
		if (timeEl) timeEl.innerHTML = '00:00:00/' + timeToString(Date.now() - recording);
		setTimeout(updateRecordingTime, 1000);
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
		if (timeEl) timeEl.innerHTML = '00:00:00/' + timeToString(recordingLength);
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

function toggleRecording() {
	if (recording) stopRecording();
	else startRecording();
}

// ============================================
// Soundfont & MIDI Player Setup
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
				console.log('[Piano] MIDI plugin loaded');
				setupMidiPlayerListener();
				applyVolumeToAllChannels();
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
				instrument: resp[0],
				onsuccess: function() {
					console.log('[Piano] MIDI plugin loaded');
					setupMidiPlayerListener();
					applyVolumeToAllChannels();
				}
			});
		});
	}
}

function setupMidiPlayerListener() {
	MIDI.Player.removeListener();
	
	MIDI.Player.addListener(function(data) {
		var midiTranspose = getMidiTranspose();
		var transposedNote = data.note + midiTranspose;
		
		if (transposedNote < 21 || transposedNote > 108) return;
		
		var key = midiNoteToKey(transposedNote);
		var noteName = midiNoteName(transposedNote);
		var octave = midiNoteOctave(transposedNote);
		var instrument = channels[midiChannel] || allowedInstruments[0] || 'acoustic_grand_piano';
		
		var isNoteOn = (data.message === 144 && data.velocity > 0);
		
		if (isNoteOn) {
			if (key) highlightKey(key, true);
			
			queueNoteForSending({
				type: 'on',
				channel: midiChannel,
				instrument: instrument,
				note: noteName,
				octave: octave,
				velocity: Math.round(data.velocity * masterVolume)
			});
		} else {
			if (key) unhighlightKey(key);
			
			queueNoteForSending({
				type: 'off',
				channel: midiChannel,
				note: noteName,
				octave: octave
			});
		}
	});
}

function setInstrumentPreset(data) {
	var instrumentSelect = document.getElementById('instrument');
	if (instrumentSelect) instrumentSelect.value = data.instrument;
	setInstrument(midiChannel, data.instrument);
}

// ============================================
// MIDI File Loading and Playback
// ============================================

function play() {
	const midiInput = document.getElementById('url');
	if (!midiInput) return;

	let midiUrl = midiInput.value.trim();
	if (!midiUrl) return;

	console.log("[Piano] Loading MIDI:", midiUrl);
	
	if (MIDI.Player.playing) {
		MIDI.Player.stop();
	}
	clearPendingNotes();
	stopHostingSession();

	if (midiUrl.startsWith('http://') || midiUrl.startsWith('https://')) {
		fetch('https://' + GetParentResourceName() + '/downloadMidi', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ url: midiUrl })
		})
		.then(resp => resp.json())
		.then(result => {
			if (result.success && result.data) {
				const bytes = new Uint8Array(result.data);
				const blob = new Blob([bytes], { type: 'audio/midi' });
				const blobUrl = URL.createObjectURL(blob);
				loadAndPlayMidi(blobUrl, midiUrl);
			} else {
				console.error("[Piano] Proxy error:", result.error);
			}
		})
		.catch(error => console.error("[Piano] Fetch error:", error));
	} else {
		loadAndPlayMidi(midiUrl, midiUrl);
	}
}

const MAX_MIDI_DURATION = 10 * 60 * 1000;

function loadAndPlayMidi(url, originalUrl) {
	console.log("[Piano] Loading from:", url);
	
	MIDI.Player.loadFile(url, function() {
		console.log("[Piano] File loaded, duration:", MIDI.Player.endTime, "ms");
		
		if (MIDI.Player.endTime > MAX_MIDI_DURATION) {
			console.error("[Piano] File too long");
			var timeEl = document.getElementById('time');
			if (timeEl) {
				timeEl.innerHTML = 'TOO LONG!';
				setTimeout(() => { timeEl.innerHTML = '00:00:00/00:00:00'; }, 3000);
			}
			if (url.startsWith('blob:')) URL.revokeObjectURL(url);
			return;
		}
		
		var currentInstrument = channels[midiChannel];
		if (!currentInstrument) {
			var instrumentSelect = document.getElementById('instrument');
			currentInstrument = instrumentSelect?.value || allowedInstruments[0];
		}
		
		if (currentInstrument) {
			var promises = [];
			for (var i = 0; i < 16; i++) {
				promises.push(setInstrument(i, currentInstrument));
			}
			
			Promise.all(promises).then(() => {
				for (var i = 0; i < 16; i++) {
					if (MIDI.GM.byName[currentInstrument]) {
						MIDI.programChange(i, MIDI.GM.byName[currentInstrument].number);
					}
				}
				applyVolumeToAllChannels();
				startMidiPlayback(originalUrl);
			});
		} else {
			startMidiPlayback(originalUrl);
		}
		
	}, null, function(err) {
		console.error("[Piano] Load error:", err);
		if (url.startsWith('blob:')) URL.revokeObjectURL(url);
	});
}

function startMidiPlayback(originalUrl) {
	applyTempo();
	applyVolumeToAllChannels();
	
	console.log("[Piano] Starting playback, BPM:", tempo, "Volume:", playbackVolume + '%');
	
	// Обновляем время каждые 500мс
	midiTimeUpdateInterval = setInterval(updateMidiTime, 500);
	
	// Обновляем позицию сессии каждую секунду
	if (originalUrl) {
		startHostingSession(originalUrl);
		
		// Дополнительный интервал для синхронизации позиции
		setInterval(function() {
			if (isHostingSession && MIDI.Player.playing) {
				updateSessionPosition();
			}
		}, 1000);
	}
	
	MIDI.Player.start();
	midiIsPlaying = true;
}
// ============================================
// Chord Functions
// ============================================

function getChordKeys(event) {
	if (shiftKey) return chordKeys['minor'][chordMode];
	if (ctrlKey) return chordKeys['diminished'][chordMode];
	return chordKeys['major'][chordMode];
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

// ============================================
// Instrument Display Names
// ============================================

var instrumentNames = {
	'piano': 'Piano', 'trumpet': 'Trumpet', 'guitar': 'Guitar',
	'harp': 'Harp', 'harmonica': 'Harmonica', 'concertina': 'Concertina',
	'banjo': 'Banjo', 'fiddle': 'Fiddle'
};

function getInstrumentDisplayName(instrument) {
	return instrumentNames[instrument] || instrument;
}

function populateInteractions(instruments) {
	var interactionSelect = document.getElementById('interaction');
	if (!interactionSelect) return;
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
		case 'showUi': showUi(); break;
		case 'hideUi': hideUi(); break;
		case 'noteOn': recvNoteOn(event.data); break;
		case 'noteOff': recvNoteOff(event.data); break;
		case 'setInstrumentPreset': setInstrumentPreset(event.data); break;
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
		
		if (typeof Metronome !== 'undefined') metronome = new Metronome(tempo);

		populateInteractions(resp.instruments);
		
		var volumeInput = document.getElementById('volume');
		if (volumeInput) setPlaybackVolume(parseInt(volumeInput.value) || 100);
	}).catch(err => console.error('[Piano] Init error:', err));

	document.querySelectorAll('.piano-key').forEach(key => {
		key.addEventListener('mousedown', function(event) { pressKey(this, event); });
		key.addEventListener('mouseup', function(event) { releaseKey(this, event); });
		key.addEventListener('mouseout', function(event) { releaseKey(this, event); });
	});

	document.getElementById('close')?.addEventListener('click', function() {
		stopAllPlayback();
		sendMessage('closeUi', {});
	});

	document.getElementById('octave')?.addEventListener('input', function() {
		var octave = parseInt(this.value);
		if (!isNaN(octave) && octave >= minOctave && octave <= maxOctave) baseOctave = octave;
		this.value = baseOctave;
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('tempo')?.addEventListener('input', function() {
		var t = parseInt(this.value);
		if (!isNaN(t) && t >= 30 && t <= 400) {
			tempo = t;
			if (MIDI.Player.playing) applyTempo();
			if (metronome) {
				var running = metronome.isRunning;
				metronome.stop();
				if (typeof Metronome !== 'undefined') {
					metronome = new Metronome(tempo);
					if (running) metronome.start();
				}
			}
		}
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('volume')?.addEventListener('input', function() {
		var vol = parseInt(this.value);
		if (!isNaN(vol) && vol >= 0 && vol <= 100) setPlaybackVolume(vol);
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('play')?.addEventListener('click', function() {
		play();
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('stop')?.addEventListener('click', function() {
		stopAllPlayback();
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('record')?.addEventListener('click', function() {
		toggleRecording();
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('erase')?.addEventListener('click', function() {
		eraseRecording();
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('join-session')?.addEventListener('click', function() {
		toggleJoinSession();
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('start-interaction')?.addEventListener('click', function() {
		var interactionSelect = document.getElementById('interaction');
		if (interactionSelect) sendMessage('startPlayingInstrument', { instrument: interactionSelect.value });
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('stop-interaction')?.addEventListener('click', function() {
		sendMessage('stopPlayingInstrument', {});
		document.getElementById('keyboard')?.focus();
	});

	document.getElementById('help-button')?.addEventListener('click', function() {
		var helpDiv = document.getElementById('help');
		if (helpDiv) helpDiv.style.display = 'flex';
	});

	document.getElementById('close-help')?.addEventListener('click', function() {
		var helpDiv = document.getElementById('help');
		if (helpDiv) helpDiv.style.display = 'none';
	});

	var keyboard = document.getElementById('keyboard');
	if (keyboard) {
		keyboard.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case 33: if (baseOctave < maxOctave) { baseOctave++; document.getElementById('octave').value = baseOctave; } break;
				case 34: if (baseOctave > minOctave) { baseOctave--; document.getElementById('octave').value = baseOctave; } break;
				case 36: if (transpose < 127) transpose++; break;
				case 35: if (transpose > -127) transpose--; break;
				case 45: if (midiChannel < 15) midiChannel++; break;
				case 46: if (midiChannel > 0) midiChannel--; break;
				case 38: 
					tempo = Math.min(400, tempo + 5); 
					document.getElementById('tempo').value = tempo;
					if (MIDI.Player.playing) applyTempo();
					break;
				case 40: 
					tempo = Math.max(30, tempo - 5); 
					document.getElementById('tempo').value = tempo;
					if (MIDI.Player.playing) applyTempo();
					break;
				default:
					var key = keys[event.keyCode];
					if (key) pressKey(document.getElementById(key), event);
					break;
			}
		});

		keyboard.addEventListener('keyup', event => {
			switch (event.keyCode) {
				case 32: play(); break;
				case 220: toggleRecording(); break;
				default:
					var key = keys[event.keyCode];
					if (key) releaseKey(document.getElementById(key), event);
					break;
			}
		});
	}
});

window.addEventListener('keydown', event => {
	if (event.keyCode === 16) shiftKey = true;
	if (event.keyCode === 17) ctrlKey = true;
});

window.addEventListener('keyup', event => {
	if (event.keyCode === 16) shiftKey = false;
	if (event.keyCode === 17) ctrlKey = false;
});