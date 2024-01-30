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

    if (playerScore + computerScore == 5) {
        createFinalPane()
    }
}

function createFinalPane() {
        let finalWinner;
        if (playerScore > computerScore) {
            finalWinner = "Player Wins!"
        } else if (computerScore > playerScore) {
            finalWinner = "Computer Wins :("
        } else {
            finalWinner = "It's a Tie"
        }

        rockButton.setAttribute('class', 'disabled')
        paperButton.setAttribute('class', 'disabled')
        scissorButton.setAttribute('class', 'disabled')
        let container = document.querySelector('.gameContainer');
        let finalPane = document.createElement('div');
        finalPane.setAttribute("class", "resultsPane final")

        let finalDiv1 = document.createElement('div');
        finalDiv1.setAttribute("class", "child");

        let finalDiv2 = document.createElement('div');
        finalDiv2.setAttribute("class", "child");

        let finalText = document.createElement('h2');
        finalText.textContent = `Game Over: ${playerScore} - ${computerScore}`;

        let finalText2 = document.createElement('h2');
        if (finalWinner == "Player Wins!") {
            finalText2.style.cssText = "color: blue;"
        } else if (finalWinner == "Computer Wins :(") {
            finalText2.style.cssText = "color: red;"
        };
        finalText2.textContent = finalWinner

        finalDiv1.appendChild(finalText)
        finalDiv2.appendChild(finalText2)
        finalPane.appendChild(finalDiv1)
        finalPane.appendChild(finalDiv2)
        container.appendChild(finalPane)
}

function displayResults(playerChoice, computerChoice, result) {

    let topLabel = document.querySelector("#topLabel");
    topLabel.classList.remove("hidden");

    let winner;

    if (result == 0){
        winner = "Player Wins!"
    } else if (result == 1){
        winner = "Computer Wins"   
    } else {
        winner = "It's a Tie"
    }

    let pane = document.createElement('div');
    let container = document.querySelector('.gameContainer');
    pane.setAttribute("class", "resultsPane");

    let playerEle = document.createElement('p')
    playerEle.style.cssText = "color: blue; font-weight: 800;"
    playerEle.textContent = `${playerChoice}`

    let computerEle = document.createElement('p')
    computerEle.style.cssText = "color: red; font-weight: 800;"
    computerEle.textContent = `${computerChoice}`

    let resultText = document.createElement('h2');
    if (result == 0) {
        resultText.style.cssText = "color: blue;"
    } else if (result == 1) {
        resultText.style.cssText = "color: red;"
    }
    resultText.textContent = winner

    let childDiv1 = document.createElement('div')
    childDiv1.setAttribute("class", "child")

    let childDiv2 = document.createElement('div')
    childDiv2.setAttribute("class", "child")

    let childDiv3 = document.createElement('div')
    childDiv3.setAttribute("class", "child")

    childDiv1.appendChild(playerEle)
    childDiv2.appendChild(resultText)
    childDiv3.appendChild(computerEle)

    pane.appendChild(childDiv1);
    pane.appendChild(childDiv2)
    pane.appendChild(childDiv3);

    container.appendChild(pane)
}

let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rockButton");
rockButton.addEventListener('click', () => {
    if (rockButton.getAttribute('class') != "disabled") {
        let computerChoice = getComputerChoice()
        console.log(computerChoice)
        let result = playRound(computerChoice[1], 0)
        displayResults("rock", computerChoice[0], result)
        increaseScore(result)
    }
});

let paperButton = document.querySelector("#paperButton");
paperButton.addEventListener('click', () => {
    if (paperButton.getAttribute('class') != "disabled") {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    let result = playRound(computerChoice[1], 1)
    displayResults("paper", computerChoice[0], result)
    increaseScore(result)
    }
});

let scissorButton = document.querySelector("#scissorButton");
scissorButton.addEventListener('click', () => {
    if (scissorButton.getAttribute('class') != "disabled") {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
    let result = playRound(computerChoice[1], 2)
    displayResults("scissors", computerChoice[0], result)
    increaseScore(result)
    }
});





