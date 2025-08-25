const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultMessageSpan = document.getElementById("result-message");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const restartButton = document.getElementById("restart-button");

const CHOICES = ["👊", "🤚", "✂"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (playerChoice === "👊" && computerChoice === "✂") ||
        (playerChoice === "🤚" && computerChoice === "👊") ||
        (playerChoice === "✂" && computerChoice === "🤚")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function updateDisplay(playerChoice, computerChoice, result) {
    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    resultMessageSpan.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. It's a ${result}!`;

    if (result === "win") {
        resultMessageSpan.classList.add("win-animation");
    } else if (result === "lose") {
        resultMessageSpan.classList.add("lose-animation");
    } else {
        resultMessageSpan.classList.add("draw-animation");
    }

    setTimeout(() => {
        resultMessageSpan.classList.remove("win-animation", "lose-animation", "draw-animation");
    }, 500); // Remove animation classes after 0.5 seconds
}

function updateScore(result) {
    if (result === "win") {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
    updateDisplay(playerChoice, computerChoice, result);

}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    playerChoiceSpan.textContent = "";
    computerChoiceSpan.textContent = "";
    resultMessageSpan.textContent = "Make your choice!";
}

rockButton.addEventListener("click", () => playRound("👊"));
paperButton.addEventListener("click", () => playRound("🤚"));
scissorsButton.addEventListener("click", () => playRound("✂"));
restartButton.addEventListener("click", restartGame);