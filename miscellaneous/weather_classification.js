const input = document.getElementById('input');
input.onchange = function () { handleFiles(this); };

function handleFiles(this) {
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
}