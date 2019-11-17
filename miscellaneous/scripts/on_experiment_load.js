'use strict';

// on load, show a black display

let displayCanvas = document.getElementById('displayCanvas');

if (displayCanvas) {
    let context = displayCanvas.getContext('2d');
    context.fillStyle = '#000000'; // black
    context.fillRect(0, 0, displayCanvas.clientWidth, displayCanvas.height);
}