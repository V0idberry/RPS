const choices = [
    "rock",
    "paper",
    "scissors"
];

const playerSelection = prompt("Please type your choice: rock, paper or scissors").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];

    return randomChoice;
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection != ('rock' || 'paper' || 'scissors')) {
        return(playerSelection + " isn't a valid input. Please use rock, paper or scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ('You Win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ('You Win! Paper beats Rock!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ('You Win! Scissors beat Paper!');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return ('You Lose! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return ('You Lose! Scissors beat Paper!');
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return ('You Lose! Rock beats Scissors!');
    } else {
        return ("It's a Draw!")
    }
}

console.log(gameRound(playerSelection, computerSelection));