// Footer
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// Static weather values
const temperature = 10;
const windSpeed = 5;


// Wind chill function
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}


// Display wind chill
let windChillDisplay = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay =
        calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}

document.getElementById("windchill").textContent =
    windChillDisplay;