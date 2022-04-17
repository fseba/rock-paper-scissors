const playerInput = window.prompt("What is your choice? Rock, Paper or Scissors?").toUpperCase();
let playerCounter = 0;
let computerCounter = 0; 


function computerPlay () {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3 )];
}

function playRound (playerSelection, computerSelection) {
    switch(true) {
        case (playerSelection === computerSelection):
            console.log(`Draw!`);
            break;
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
            playerCounter++; 
            console.log(`You won! ${playerSelection} defeats ${computerSelection}`);
            break;
        default:
            computerCounter++;
            console.log(`You lose! ${playerSelection} is defeated by ${computerSelection}.`);
    }
}

function game () {
    playerCounter = 0; 
    computerCounter = 0; 

    for (let i = 0; i < 5; i++){
        playRound(playerInput, computerPlay());
    }
    playerCounter > computerCounter ? console.log("You won! GG WP!") : console.log("You lost! GG WP");
}

game();
