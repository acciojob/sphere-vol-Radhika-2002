function volume_sphere(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById('radius').value;

    // Parse the radius value as a float
    const radius = parseFloat(radiusInput);

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // If the input is invalid, display 'NaN' in the volume field
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume rounded to four decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    }
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
