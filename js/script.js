function getComputerChoice() {
    let choice = 0;
    choice = (Math.floor((Math.random() * 3) + 1));
    return choice;
}

function getHumanChoice() {
    let choiceNumber = 0;
    let choice = "";
    choice = prompt("Write your choice:").toLowerCase();
    if (choice === "rock") {
        choiceNumber = 1;
    } else if (choice === "paper") {
        choiceNumber = 2;
    } else if (choice === "scissors") {
        choiceNumber = 3;
    }
    return choiceNumber;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("DRAW!")
    } else if (humanChoice === 1 && computerChoice === 2) {
        computerScore++;
    } else if (humanChoice === 1 && computerChoice === 3) {
        humanScore++;
    } else if (humanChoice === 2 && computerChoice === 1) {
        humanScore++;
    } else if (humanChoice === 2 && computerChoice === 3) {
        computerScore++;
    } else if (humanChoice === 3 && computerChoice === 1) {
        computerScore++;
    } else if (humanChoice === 3 && computerChoice === 2) {
        humanScore++;
    }

    console.log("Human choice: " + choiceToString(humanChoice) + " / Computer choice: " + choiceToString(computerChoice));
    console.log("Computer Score: " + computerScore);
    console.log("Human score: " + humanScore);
}

function choiceToString(number) {
    switch (number) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("YOU ARE THE WINNER!!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!!")
    } else {
        console.log("DRAW!!")
    }
}

function playGame() {
    let counter = 0;
    while (counter < 5) {
        console.log("ROUND " + (counter + 1));
        playRound();
        counter++;
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

getWinner(humanScore, computerScore);