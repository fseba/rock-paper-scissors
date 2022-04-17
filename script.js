const playerSelection = window.prompt("What is your choice? Rock, Paper or Scissors?").toUpperCase();
const computerSelection = computerPlay(); 
let playerCounter = 0;
let computerCounter = 0; 


function computerPlay () {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3 )];
}

function playRound (playerSelection, computerSelection) {
    switch(true) {
        case (playerSelection === computerSelection):
            return `Draw!`;
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
            playerCounter++; 
            return `You won! ${playerSelection} defeats ${computerSelection}`;
        default:
            computerCounter++;
            return `You lose! ${playerSelection} is defeated by ${computerSelection}.`;
    }
}



console.log(playRound(playerSelection, computerSelection), playerCounter, computerCounter); 