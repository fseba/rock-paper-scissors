// Game logic

let playerCounter = 0;
let computerCounter = 0; 

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3 )];
}


function getPlayerInput() {
    let playerInput = window.prompt("What is your choice? Rock, Paper or Scissors?").toUpperCase();
    if (playerInput === "ROCK" || playerInput === "PAPER" || playerInput === "SCISSORS" ) {
        return playerInput; 
    } else {
        alert("Please try again, you can only enter 'Rock', 'Paper' or 'Scissors'.");
        return getPlayerInput();
    }
}

function playRound(playerSelection, computerSelection) {
    switch(true) {
        case (playerSelection === computerSelection):
            resultRound.textContent = 'Draw!'
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
            playerScore.textContent = ++playerCounter; 
            resultRound.textContent = `You won! ${playerSelection} defeats ${computerSelection}.`;
            checkGameStatus();
            break;
        default:
            computerScore.textContent = ++computerCounter; 
            resultRound.textContent = `You lost! ${playerSelection} is defeated by ${computerSelection}.`;
            checkGameStatus();
    }
}

function checkGameStatus() {
    if (playerCounter === 5 || computerCounter === 5) {
        playerCounter > computerCounter ?  alert('You won the game! GG WP!') 
                                        : alert('You lost the game! GG WP');
        playerCounter = 0; 
        computerCounter = 0; 
        computerScore.textContent = '0';
        playerScore.textContent = '0'; 
        resultRound.textContent = '';
    }; 
}




// DOM manipulation

const buttons = document.querySelectorAll('button');

const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#playerScore');

const resultRound = document.querySelector('#resultRound'); 

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, computerPlay()));
})


