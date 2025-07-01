const randomNumberElement = document.getElementById('randomNumber');
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
     randomNumberElement.textContent = randomNumber;
});