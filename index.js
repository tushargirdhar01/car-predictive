document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const formData = new FormData(this);

    // Convert formData to JSON
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Dummy prediction (replace with actual prediction code)
    const predictionResult = predictCarPrice(data);

    // Update prediction text or handle error
    if (predictionResult.error) {
        document.getElementById('predictionText').innerHTML = `<h3>Error: ${predictionResult.error}</h3>`;
    } else {
        document.getElementById('predictionText').innerHTML = `<h3>${predictionResult.prediction_text}</h3>`;
    }
});

function predictCarPrice(data) {
    // Example: Dummy prediction
    try {
        // Perform prediction logic here
        const prediction = 'Dummy Prediction: Rs 20,000';
        return { prediction_text: prediction };
    } catch (error) {
        return { error: error.message };
    }
}
