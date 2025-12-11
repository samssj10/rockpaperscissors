function getComputerChoice() {
  let outcome = Math.random();
  return outcome > 0.6 ? "scissors" : outcome > 0.3 ? "paper" : "rock";
}

function getHumanChoice() {
  let choice = prompt("Enter your selection among rock, paper and scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(getHumanChoice(), getComputerChoice());
    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }
  }
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Its a draw!");
  }
}

playGame();
