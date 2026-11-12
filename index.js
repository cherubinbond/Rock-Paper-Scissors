
const game = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    const index = Math.floor(Math.random() * game.length);
    return game[index];
}
console.log(getComputerChoice())

function getHumanChoice() {
    const question = window.prompt();
    return question;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "its a tie";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore = humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    }

    else {
        computerScore = computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}


const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Human: " + humanScore + " | Computer: " + computerScore);
function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);
    }
}