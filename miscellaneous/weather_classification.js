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
    image.width = '224';
    image.height = '224';

    image.style.width = '224px';
    image.style.height = '224px';

    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(image);

    tf.loadLayersModel('weather_classification/model.json')
        .then(model => {
            let tensor = tf.browser.fromPixels(image);
            console.log('tensor shape: ' + tensor.shape);

            tensor = tf.reshape(tensor, [1, 224, 224, 3]);
            console.log('tensor shape: ' + tensor.shape);

            model.predict(tensor).print();
        });
}