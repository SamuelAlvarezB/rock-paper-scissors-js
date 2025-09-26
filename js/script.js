const resultDiv = document.getElementById("results");
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let target = e.target.textContent;
        if (humanScore < 5 && computerScore < 5) {
            playRound(target);
        }
    })
})

function getComputerChoice() {
    let choice = 0;
    choice = (Math.floor((Math.random() * 3) + 1));
    return choice;
}

function getHumanChoice(choice) {
    if (choice === "ROCK") {
        choiceNumber = 1;
    } else if (choice === "PAPER") {
        choiceNumber = 2;
    } else if (choice === "SCISSORS") {
        choiceNumber = 3;
    }
    return choiceNumber;
}

function playRound(human) {
    roundCount++;
    let humanChoice = getHumanChoice(human);
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

    appendResults(humanChoice, computerChoice);

    if (humanScore === 5 || computerScore === 5) {
        getWinner();
        console.log("!!!!!!!!!!!!!");
    }
}

function appendResults(humanChoice, computerChoice) {
    const round = document.createElement("p");
    round.textContent = "Round " + roundCount;
    const resultChoices = document.createElement("p");
    const resultPoints = document.createElement("p");
    resultChoices.textContent = "Human choice: " + choiceToString(humanChoice) + " / Computer choice: " + choiceToString(computerChoice);
    resultPoints.textContent = "Computer Score: " + computerScore + "   " + "Human score: " + humanScore;
    resultDiv.innerHTML = '';
    resultDiv.appendChild(round);
    resultDiv.appendChild(resultChoices);
    resultDiv.appendChild(resultPoints);
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

function getWinner() {
    const winner = document.createElement("h2");
    if (humanScore > computerScore) {
        winner.textContent = "YOU ARE THE WINNER!!";
        winner.style.color = "green";
    } else if (humanScore < computerScore) {
        winner.textContent = "YOU LOSE!!";
        winner.style.color = "red";
    }
    resultDiv.appendChild(winner);
}