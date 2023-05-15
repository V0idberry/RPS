const choices = [
    "rock",
    "paper",
    "scissors"
];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];

    return randomChoice;
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return('"' + playerSelection + '"' + " isn't a valid input. Please use rock, paper or scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return ('You Win! Rock beats Scissors!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore *= 1;
        return ('You Win! Paper beats Rock!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return ('You Win! Scissors beat Paper!');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return ('You Lose! Paper beats Rock!');
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        return ('You Lose! Scissors beat Paper!');
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return ('You Lose! Rock beats Scissors!');
    } else {
        return ("It's a Draw!")
    }
}

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

btnRock.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(gameRound(playerSelection, computerSelection));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
});

btnPaper.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(gameRound(playerSelection, computerSelection));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
});

btnScissors.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(gameRound(playerSelection, computerSelection));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
});

// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Please type your choice: rock, paper or scissors").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(gameRound(playerSelection, computerSelection));
//     }
//     console.log("Player score: " + playerScore + ". Computer score: " + computerScore + ".");
// }

// game();