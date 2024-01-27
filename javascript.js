function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * options.length)
    return [options[index], index];
}

let computerChoice = getComputerChoice()
console.log(`The computer chose ${computerChoice[0]}`);

let playerChoice = prompt("Rock, Paper, or Scissors?: ")

if (playerChoice === "rock"){
    choiceNum = 0;
} else if (playerChoice === "paper"){
    choiceNum = 1;
} else if (playerChoice === "scissors"){
    choiceNum = 2;
}

console.log(`The player chose ${playerChoice}`);

function playRound(computerChoice, playerChoice){
    return (playerChoice % 3 - computerChoice % 3 + 3) % 3;
}

let winner = playRound(computerChoice[1], choiceNum)

if (winner == 0){
    console.log("It's a Tie!")
} else if (winner == 1){
    console.log("The Player Wins!")
} else if (winner == 2){
    console.log("The Computer Wins :(")
}



