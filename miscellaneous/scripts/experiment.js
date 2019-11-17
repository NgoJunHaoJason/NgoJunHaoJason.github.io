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

const model = await cocoSsd.load();
console.log(model);

// add event handlers
video.onloadeddata = drawCanvas;
startStopButton.onclick = startCamera;

// canvas is black on page load
stopDisplay();

const CONSTRAINTS = {
    audio: false,
    video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 360, ideal: 720, max: 1080 },
        facingMode: 'user' // front camera; for back camera, use environment
    }
} // should let constraints be variable in future to switch cameras

// fallbacks for requestAnimationFrame
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.requestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (f) { return setTimeout(f, 1000 / 60) } // simulate calling code 60 
}

// canvas functions

function startCamera() {
    startStopButton.onclick = stopCamera;
    startStopButton.innerHTML = 'stop';

    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        startStream(CONSTRAINTS, video);
    }
    else {
        context.font = '30px Arial';
        context.strokeStyle = '#FFFFFF'; // white
        context.strokeText('no access to camera...', 5, 35); // 30 (font size) + 5
    }
}

function stopCamera() {
    startStopButton.onclick = startCamera;
    startStopButton.innerHTML = 'start';
    stopStream(video);
}

// stream functions

async function startStream(constraints, video) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
};

function stopStream(video) {
    video.srcObject.getVideoTracks().forEach(track => track.stop());
    stopDisplay();
}

// canvas functions

function drawCanvas() {
    context.drawImage(video, 0, 0, canvasWidth, canvasHeight);

    // http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
    // https://stackoverflow.com/a/33835857/9171260
    requestAnimationFrame(drawCanvas); // without this, canvas stuck on first frame
}

function stopDisplay() {
    context.fillStyle = '#000000'; // black
    context.fillRect(0, 0, canvasWidth, canvasHeight);

}
