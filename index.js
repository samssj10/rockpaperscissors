let gameStarted = false;
let humanScore = 0;
let computerScore = 0;

let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");
let resultsSection = document.querySelector("#results");

let humanScoreDisplay = document.createElement("p");
humanScoreDisplay.textContent = `Human Score = ${humanScore}`;

let computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;

resultsSection.appendChild(humanScoreDisplay);
resultsSection.appendChild(computerScoreDisplay);

let winnerDisplay = document.createElement("p");
resultsSection.appendChild(winnerDisplay);

rockChoice.addEventListener("click", playGame);
paperChoice.addEventListener("click", playGame);
scissorsChoice.addEventListener("click", playGame);

function getComputerChoice() {
  let outcome = Math.random();
  return outcome > 0.6 ? "scissors" : outcome > 0.3 ? "paper" : "rock";
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  } else {
    console.log("Its a draw!");
    return "draw";
  }
}

function playGame(e) {
  if (gameStarted === false) {
    gameStarted = true;
    winnerDisplay.textContent = "";
    humanScoreDisplay.textContent = `Human Score = ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;
  }

  let result = playRound(e.target.id, getComputerChoice());

  if (result === "win") {
    humanScoreDisplay.textContent = `Human Score = ${++humanScore}`;
  } else if (result === "lose") {
    computerScoreDisplay.textContent = `Computer Score = ${++computerScore}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winnerDisplay.textContent = "You won the game";
    } else {
      winnerDisplay.textContent = "Computer won the game";
    }
    gameStarted = false;
    humanScore = 0;
    computerScore = 0;
  }
}
