const input = document.getElementById('input');
input.onchange = function() { handleFiles(); };

function handleFiles() {
    if (!(this.files && this.files[0])) {
        console.log('invalid file');
        console.log(this.files);
        return;
    }

    const image = document.createElement('img')
    image.src = URL.createObjectURL(this.files[0]);
    
    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(image);
}