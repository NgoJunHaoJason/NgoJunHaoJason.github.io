'use strict';

let displayCanvas = document.getElementById('displayCanvas');

if (displayCanvas) {
    let context = displayCanvas.getContext('2d');
    context.strokeText('Test', 10, 50);
}