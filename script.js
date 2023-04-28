const choices = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    
    console.log(randomChoice);
    return randomChoice;
}

function gameRound() {
    let playerResponse = prompt("Please type your choice: rock, paper or scissors");
    let playerSelection = playerResponse.toLowerCase();
    let computerSelection = getComputerChoice();

    if (playerSelection != ('rock' || 'paper' || 'scissors')) {
        return(playerResponse.charAt(0).toUpperCase() + playerResponse.slice(1) + " isn't a valid input. Please use rock, paper or scissors");
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

console.log(gameRound());