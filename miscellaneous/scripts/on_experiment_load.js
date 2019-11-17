'use strict';

// on load page, show a black display
window.onload = function () {
    let displayCanvas = document.getElementById('displayCanvas');

    if (displayCanvas) {
        let context = displayCanvas.getContext('2d');
        context.fillStyle = '#000000'; // black
        context.fillRect(0, 0, displayCanvas.clientWidth, displayCanvas.height);
    }
}
