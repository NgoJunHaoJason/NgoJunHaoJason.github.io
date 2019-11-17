'use strict';

let displayCanvas = document.getElementById('displayCanvas');

if (displayCanvas) {
    let context = displayCanvas.getContext('2d');
    context.strokeText('Test', 10, 50);

    let contentDiv = document.querySelectorAll('.content')[0];
    console.log(contentDiv);

    displayCanvas.width = contentDiv.offsetWidth;
    displayCanvas.height = contentDiv.offsetHeight;
}