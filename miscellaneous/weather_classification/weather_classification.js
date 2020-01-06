const WEATHER_CLASS = ['cloudy', 'foggy', 'rain', 'snow', 'sunny'];

const imageInput = document.getElementById('image-input');
imageInput.onchange = () => handleFiles(imageInput);

const classificationResult = document.getElementById('classification-result');

let model = null;
tf.loadLayersModel('model/model.json')
    .then(loadedModel => {
        model = loadedModel;
        imageInput.disabled = false;
        classificationResult.innerHTML = 'model loaded';
    })

async function handleFiles(input) {
    if (!(input.files && input.files[0])) {
        console.log('invalid file');
        return;
    }

    const image = await setUpImage(input);

    const {
        weather,
        confidence,
    } = await classifyImage(image);

    classificationResult.innerHTML = 'weather classified as: ' + weather +
        ', with confidence score of ' + confidence.toFixed(2);
}

async function setUpImage(input) {
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

    return image;
}

async function classifyImage(image) {
    let tensor = tf.browser.fromPixels(image);
    tensor = tf.reshape(tensor, [1, 224, 224, 3]);

    const prediction = model.predict(tensor);

    const scores = await prediction.flatten().data();

    let highestConfidenceIndex = 0;
    let highestConfidence = 0;

    for (let index = 0; index < scores.length; ++index) {
        if (scores[index] > highestConfidence) {
            highestConfidenceIndex = index;
            highestConfidence = scores[index];
        }
    }

    const weather = WEATHER_CLASS[highestConfidenceIndex];

    return {
        weather,
        'confidence': highestConfidence,
    };
}