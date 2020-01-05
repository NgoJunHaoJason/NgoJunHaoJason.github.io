const WEATHER_CLASS = ['cloudy', 'foggy', 'rain', 'snow', 'sunny'];

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
    image.style.width = '224px';
    image.style.height = '224px';

    let classification = document.getElementById('classification');
    if (!classification) {
        classification = document.createElement('p');
        classification.id = 'classification';
    }

    classification.innerHTML = 'classifying weather...';

    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.appendChild(image);
    contentDiv.appendChild(classification);

    tf.loadLayersModel('weather_classification/model.json')
        .then(model => {
            let tensor = tf.browser.fromPixels(image);
            tensor = tf.reshape(tensor, [1, 224, 224, 3]);

            const prediction = model.predict(tensor);

            return prediction.flatten().data();
        })
        .then(scores => {
            let highestConfidenceIndex = 0;
            let highestConfidence = 0;

            for (let index = 0; index < scores.length; ++index) {
                if (scores[index] > highestConfidence) {
                    highestConfidenceIndex = index;
                    highestConfidence = scores[index];
                }
            }

            const weather = WEATHER_CLASS[highestConfidenceIndex]
            classification.innerHTML = 'weather classified as: ' + weather;
        });
}