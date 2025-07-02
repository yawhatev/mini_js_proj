const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');   
const resultMessage = document.getElementById('resultMessage');
const resetGameButton = document.getElementById('resetGame');
let randomNumber;

const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100) + 1;
};

// Initialize the game
const initGame = () => {
    randomNumber = randomNumberGenerator();
    guessInput.value = '';
    resultMessage.textContent = 'Guess a number between 1 and 100!';
    console.log('New random number:', randomNumber); // For debugging - remove later
};

submitGuessButton.addEventListener('click', function() {
 const userGuess= Number(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the number!';
        resultMessage.style.color = '#28a745'; // Green for success
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = '#d9534f'; // Red for hints
    } else {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = '#d9534f'; // Red for hints
    }   
});

resetGameButton.addEventListener('click', function() {
    initGame();
});

// Start the game when page loads
initGame();
