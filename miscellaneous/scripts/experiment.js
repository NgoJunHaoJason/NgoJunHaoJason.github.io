'use strict';

// resources:
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// https://scotch.io/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia
// https://developers.google.com/web/fundamentals/media/capturing-images
// https://stackoverflow.com/questions/49473678/accessing-device-camera-using-javascript
// https://www.w3schools.com/tags/canvas_drawimage.asp

// initialise stuff
const displayCanvas = document.getElementById('display-canvas');
const context = displayCanvas.getContext('2d');
const canvasWidth = displayCanvas.width;
const canvasHeight = displayCanvas.height;

const video = document.getElementById('video');
const startStopButton = document.getElementById('start-stop-button');

// add event handlers
video.onloadeddata = drawCanvas;
startStopButton.onclick = startCamera;

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
    stopDisplay();
}

// canvas

function drawCanvas() {
    context.drawImage(video, 0, 0, canvasWidth, canvasHeight);
    console.log('loaded frame');
}

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

function stopDisplay() {
    context.fillStyle = '#000000'; // black
    context.fillRect(0, 0, canvasWidth, canvasHeight);

}

// on load page, show a black display
// let displayCanvas = document.getElementById('displayCanvas');

// if (displayCanvas) {
//     let context = displayCanvas.getContext('2d');
//     context.fillStyle = '#000000'; // black
//     context.fillRect(0, 0, displayCanvas.width, displayCanvas.height);
// }
