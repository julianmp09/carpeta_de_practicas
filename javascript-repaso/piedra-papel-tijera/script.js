// Elementos del DOM
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Función para generar la opción del computador
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Función para determinar el ganador
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return '¡Empate!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return '¡Ganaste!';
    } else {
        return '¡Perdiste!';
    }
}

// Función principal
function main() {
    rockBtn.addEventListener('click', function () {
        playGame('rock');
    });

    paperBtn.addEventListener('click', function () {
        playGame('paper');
    });

    scissorsBtn.addEventListener('click', function () {
        playGame('scissors');
    });
}

// Función para jugar el juego
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultDiv.textContent = `El computador eligió ${computerChoice} . ${result}`;
}

// Iniciar el juego
main();
