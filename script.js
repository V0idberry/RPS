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
        document.getElementById("show-results").innerHTML = 'You Win! Rock beats Scissors!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        document.getElementById("show-results").innerHTML = 'You Win! Paper beats Rock!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        document.getElementById("show-results").innerHTML = 'You Win! Scissors beat Paper!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        document.getElementById("show-results").innerHTML = 'You Lose! Paper beats Rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        document.getElementById("show-results").innerHTML = 'You Lose! Scissors beat Paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        document.getElementById("show-results").innerHTML = 'You Lose! Rock beats Scissors!';
    } else {
        document.getElementById("show-results").innerHTML = "It's a Draw!";
    }
}

function updateScore() {
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

btnRock.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    gameRound(playerSelection, computerSelection);
    updateScore();
});

btnPaper.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    gameRound(playerSelection, computerSelection);
    updateScore();

});

btnScissors.addEventListener('click', (e) => {
    playerSelection = e.target.innerText.toLowerCase();
    computerSelection = getComputerChoice();
    gameRound(playerSelection, computerSelection);
    updateScore();
});