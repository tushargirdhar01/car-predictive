document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const formData = new FormData(this);

    // Convert formData to JSON
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Example: Sending data to server using fetch API
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('predictionText').innerHTML = `<h3>${result.prediction_text}</h3>`;
    })
    .catch(error => console.error('Error:', error));
});
