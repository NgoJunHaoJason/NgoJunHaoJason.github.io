const input = document.getElementById('input');

input.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        const image = document.createElement('img')
        image.src = URL.createObjectURL(this.files[0]);

        const contentDiv = document.getElementsByClassName('content')[0];
        contentDiv.appendChild(image);
    }
    else {
        console.log('invalid file');
        console.log(this.files);
        return;
    }
});

// input.onchange = function (this) { handleFiles(this); };

// function handleFiles() {
//     if (this.files && this.files[0]) {
//         const image = document.createElement('img')
//         image.src = URL.createObjectURL(this.files[0]);

//         const contentDiv = document.getElementsByClassName('content')[0];
//         contentDiv.appendChild(image);
//     }
//     else {
//         console.log('invalid file');
//         console.log(this.files);
//         return;
//     }
// }