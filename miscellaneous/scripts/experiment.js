'use strict';

function startDisplay(displayId) {
    let displayCanvas = document.getElementById(displayId);

    if (displayCanvas) {
        let context = displayCanvas.getContext('2d');
        
        context.font = '30px Arial';
        context.strokeStyle = '#FFFFFF'; // white
        context.strokeText('display stuff...', 5, 5);
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

// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

// let constraints = {
//     video: {
//         width: { min: 1024, ideal: 1280, max: 1920 },
//         height: { min: 776, ideal: 720, max: 1080 }
//     }
// }