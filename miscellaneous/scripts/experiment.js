'use strict';

const video = document.getElementById('video');
const startStopButton = document.getElementById('start-stop-button');
startStopButton.onclick = startCamera;

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

const CONSTRAINTS = {
    audio: false,
    video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 360, ideal: 720, max: 1080 },
        facingMode: 'user' // front camera; for back camera, use environment
    }
}

function startCamera() {
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        startStopButton.onclick = stopCamera;
        startStopButton.innerHTML = 'stop';
        startStream(CONSTRAINTS,video);
    }
}

async function startStream(constraints, video) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
};

function stopCamera() {
    startStopButton.onclick = startCamera;
    startStopButton.innerHTML = 'start';
    stopStream(video);
}

function stopStream(video) {
    video.srcObject.getVideoTracks().forEach(track => track.stop());
}

// canvas

function startDisplay(displayId) {
    let displayCanvas = document.getElementById(displayId);

    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        
    }
    else {
        let context = displayCanvas.getContext('2d');
        
        context.font = '30px Arial';
        context.strokeStyle = '#FFFFFF'; // white
        context.strokeText('no access to camera...', 5, 35); // 30 (font size) + 5
    }
}

function stopDisplay(displayId) {
    let displayCanvas = document.getElementById(displayId);

    if (displayCanvas) {
        let context = displayCanvas.getContext('2d');
        context.fillStyle = '#000000'; // black
        context.fillRect(0, 0, displayCanvas.width, displayCanvas.height);
    }
}

// on load page, show a black display
// let displayCanvas = document.getElementById('displayCanvas');

// if (displayCanvas) {
//     let context = displayCanvas.getContext('2d');
//     context.fillStyle = '#000000'; // black
//     context.fillRect(0, 0, displayCanvas.width, displayCanvas.height);
// }
