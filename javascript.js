function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * options.length)
    return options[index];
}

let computerChoice = getComputerChoice()
console.log(`The computer chose ${computerChoice}`);

let playerChoice = prompt("Rock, Paper, or Scissors?: ")
console.log(`The player chose ${playerChoice}`)

function playRound(computerChoice, playerChoice){
    
}