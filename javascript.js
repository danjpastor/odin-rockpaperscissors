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

function increaseScore(result) {
    if (result == 0){
        playerScore += 1
    } else if (result == 1){
        computerScore += 1
        
    }
    let score = document.querySelector('h5');
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}`

}

let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rockButton");
rockButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    let result = playRound(computerChoice[1], 0)
    increaseScore(result)
});

let paperButton = document.querySelector("#paperButton");
paperButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    let result = playRound(computerChoice[1], 1)
    increaseScore(result)
});

let scissorButton = document.querySelector("#scissorButton");
scissorButton.addEventListener('click', () => {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    let result = playRound(computerChoice[1], 2)
    increaseScore(result)
});





