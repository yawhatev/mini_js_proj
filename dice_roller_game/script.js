const rollButton = document.getElementById('rollButton');
const diceResult = document.getElementById('diceResult');
const diceMessage = document.getElementById('diceMessage');

function putimage(diceRoll) {
    switch (diceRoll) {
        case 1:
            return '<img src="dices/1.png" alt="Dice 1">';
        case 2:
            return '<img src="dices/2.png" alt="Dice 2">';
        case 3:
            return '<img src="dices/3.png" alt="Dice 3">';
        case 4:
            return '<img src="dices/4.png" alt="Dice 4">';
        case 5:
            return '<img src="dices/5.png" alt="Dice 5">';
        case 6:
            return '<img src="dices/6.png" alt="Dice 6">';
        default:
            return '<p>Error: Invalid dice roll</p>';
    }
}

rollButton.onclick = function() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    diceMessage.textContent = `You rolled a ${diceRoll}!`;
    diceResult.innerHTML = putimage(diceRoll); 
}