const imageInput = document.getElementById('image-input');
imageInput.onchange = () => handleFiles(imageInput);

function handleFiles(input) {
    if (!(input.files && input.files[0])) {
        console.log('invalid file');
        return;
    }

    let image = document.getElementById('image');

    if (!image) {
        image = document.createElement('img');
        image.id = 'image';
    }

    image.src = URL.createObjectURL(input.files[0]);

    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(image);

    try {
        loadLayersModel('model.json')
            .then(model => console.log(model.predict(image)));
    }
    catch (error) {
        console.log(error);
    }
}