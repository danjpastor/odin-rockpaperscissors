function getComputerChoice(){
    const options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * options.length)
    return [options[index], index];
}

function playRound(computerChoice, playerChoice){
    let result = (playerChoice % 3 - computerChoice % 3 + 3) % 3;

    if (result == 0){
        console.log("It's a Tie!")
        return 2;
    } else if (result == 1){
        console.log("The Player Wins!")
        return 0;
    } else if (result == 2){
        console.log("The Computer Wins :(")
        return 1;
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let counter = 1;

    while (counter <= 5) {
    console.log(`Game ${counter}`)
    let computerChoice = getComputerChoice()

    let playerChoice = prompt("Rock, Paper, or Scissors?: ").toLowerCase()


    if (playerChoice === "rock"){
        choiceNum = 0;
    } else if (playerChoice === "paper"){
        choiceNum = 1;
    } else if (playerChoice === "scissors"){
        choiceNum = 2;
    } else {
        console.log("Please choose a valid response!")
        continue
    }

    console.log(`The player chose ${playerChoice.toUpperCase()}`);
    console.log(`The computer chose ${computerChoice[0].toUpperCase()}`);

    let winner = playRound(computerChoice[1], choiceNum)

    if (winner == 0){
        playerScore += 1
        counter += 1
    } else if (winner == 1){
        computerScore += 1
        counter += 1
    } else if (winner == 2){
        continue
    }
    // console.log(`counter = ${counter}`)
    }
    return [computerScore, playerScore]
}

let score = game()
console.log(`Final Scores: Computer ${score[0]}, Player ${score[1]}`)





