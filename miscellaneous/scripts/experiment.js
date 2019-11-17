'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

let constraints = {
    video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 776, ideal: 720, max: 1080 }
    }
}