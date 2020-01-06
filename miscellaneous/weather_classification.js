const WEATHER_CLASS = ['cloudy', 'foggy', 'rain', 'snow', 'sunny'];

const imageInput = document.getElementById('image-input');
imageInput.onchange = () => handleFiles(imageInput);

const classificationResult = document.getElementById('classification-result');

let model = null;
tf.loadLayersModel('weather_classification/model.json')
    .then(loadedModel => {
        model = loadedModel;
        imageInput.disabled = false;
        classificationResult.innerHTML = 'model loaded';
    })

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

    classificationResult.innerHTML = 'classifying weather...';

    const weatherClassificationDiv = document.getElementById('weather-classification');
    weatherClassificationDiv.appendChild(image);

    let tensor = tf.browser.fromPixels(image);
    tensor = tf.reshape(tensor, [1, 224, 224, 3]);

    const prediction = model.predict(tensor);

    prediction.flatten().data()
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
            console.log(scores);
            console.log(weather);
        });
}