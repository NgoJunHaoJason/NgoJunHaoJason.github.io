const input = document.getElementById('input');
input.onchange = () => handleFiles(this.files);

function handleFiles(files) {
    const selectedFile = files[0];
    const contentDiv = document.getElementsByClassName('content')[0];

    const image = document.createElement('img')
    image.src = selectedFile;
    
    contentDiv.appendChild(image);
}