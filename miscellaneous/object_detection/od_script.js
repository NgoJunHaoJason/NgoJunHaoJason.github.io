'use strict';

// resources:
// camera - https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// camera - https://scotch.io/tutorials/front-and-rear-camera-access-with-javascripts-getusermedia
// camera - https://developers.google.com/web/fundamentals/media/capturing-images
// camera - https://stackoverflow.com/questions/49473678/accessing-device-camera-using-javascript
// canvas - https://www.w3schools.com/tags/canvas_drawimage.asp
// object detection - https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd

// initialise stuff
const TENSORFLOW_URL = 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js';
const COCO_SSD_URL = 'https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd';

const CONFIDENCE_THRESHOLD = 0.2;
const CANVAS_TEXT_FONT_SIZE = 12;

const CONSTRAINTS = {
    audio: false,
    video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 360, ideal: 720, max: 1080 },
        facingMode: 'user' // front camera; for back camera, use environment
    }
} // should let constraints be variable in future to switch cameras

const displayCanvas = document.getElementById('display-canvas');
const context = displayCanvas.getContext('2d');
context.font = CANVAS_TEXT_FONT_SIZE + 'px Arial';
context.strokeStyle = '#32CD32'; // lime green
context.fillStyle = '#000000'; // black

const canvasWidth = displayCanvas.width;
const canvasHeight = displayCanvas.height;

const video = document.getElementById('video');
video.width = canvasWidth; // otherwise, will pass in video of 0 width to model
video.height = canvasHeight; // otherwise, will pass in video of 0 height to model
const startStopButton = document.getElementById('start-stop-button');

// set up detection model
let detectionModel = null;

addLoadEvent(setUpObjectDetection);

function setUpObjectDetection() {
    // add event handlers
    video.onloadeddata = drawCanvas;
    startStopButton.onclick = startCamera;

    // canvas is black on page load
    darkenCanvas();

    // fallbacks for requestAnimationFrame
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) { return setTimeout(func, 1000 / 60); };
    }

    loadScript(TENSORFLOW_URL)
        .then(() => loadScript(COCO_SSD_URL))
        .then(() => cocoSsd.load())
        .then(model => detectionModel = model)
        .catch(error => console.log(error.message));
}

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`error loading script: ${src}`));

        document.head.append(script);
    });
}

// camera functions below

function startCamera() {
    startStopButton.onclick = stopCamera;
    startStopButton.innerHTML = 'stop';

    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
        startStream(CONSTRAINTS, video);
    }
    else displayTextOnCanvas('no access to camera...');
}

function stopCamera() {
    startStopButton.onclick = startCamera;
    startStopButton.innerHTML = 'start';

    stopStream(video);
}

// stream functions below

async function startStream(constraints, video) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;

    const tracks = video.srcObject.getVideoTracks();
    tracks.forEach(track.onended = () => darkenCanvas());
};

function stopStream(video) {
    const tracks = video.srcObject.getVideoTracks();
    tracks.forEach(track => track.stop);

    video.srcObject = null;
}

// canvas functions below

function drawCanvas() {
    context.drawImage(video, 0, 0, canvasWidth, canvasHeight);

    if (detectionModel) {
        detectionModel.detect(video)
            .then(predictions => predictions
                .forEach(detection => drawBBoxOnCanvas(detection))
            );
    }
    else displayTextOnCanvas('loading object detector...');

    // http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
    // https://stackoverflow.com/a/33835857/9171260
    requestAnimationFrame(drawCanvas); // without this, canvas stuck on first frame
}

function drawBBoxOnCanvas(detection) {
    if (detection.score < CONFIDENCE_THRESHOLD) {
        return;
    }

    const bbox = detection.bbox;
    context.strokeRect(bbox[0], bbox[1], bbox[2], bbox[3]);
    context.strokeText(
        detection.class + ' ' + detection.score.toFixed(2),
        bbox[0] + 2,
        bbox[1] + 12
    );
}

function displayTextOnCanvas(text) {
    const offset = 5;
    context.strokeText(text, offset, CANVAS_TEXT_FONT_SIZE + offset);
}

function darkenCanvas() {
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}
