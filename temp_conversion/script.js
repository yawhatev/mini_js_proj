const  tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const unitToConvert = document.getElementById("unitToConvert");
const convertButton = document.getElementById("convertBtn");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetBtn");
let tempValue;
let unitValue;

convertButton.addEventListener("click", convertTemperature = () => {
    tempValue = parseFloat(tempInput.value);
    unitValue = unitSelect.value;
    let unitConvert= unitToConvert.value;

    if (isNaN(tempValue)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemp;
    if (unitValue === "celsius" && unitConvert === "fahrenheit") {
        convertedTemp = (tempValue * 9/5) + 32; // Celsius to Fahrenheit
        result.textContent = `${tempValue}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (unitValue === "fahrenheit" && unitConvert === "celsius") {
        convertedTemp = (tempValue - 32) * 5/9; // Fahrenheit to Celsius
        result.textContent = `${tempValue}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }
    else if (unitValue==unitConvert) {
        result.textContent = `You have selected the same unit: ${unitValue}`;
    }
});

resetButton.addEventListener("click", () => {
    tempInput.value = '';
    unitSelect.value = 'celsius';
    unitToConvert.value = 'celsius';
    result.textContent = 'Try again!';
    tempValue = null;
    unitValue = null;
});