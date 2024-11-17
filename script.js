const humanScoreUI = document.querySelector(".human-score");
const computerScoreUI = document.querySelector(".computer-score");
const log = document.querySelector(".log")

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
	let num = Math.random();
	let choice;

	if (num <= 0.333) {
		choice = "rock";
	} else if (num > 0.333 && num <= 0.666) {
		choice = "paper";
	} else {
		choice = "scissors";
	}

	return choice;
};

let getHumanChoice = () => {
	let choice;
	return choice = prompt("Choose: Rock, Paper or Scissors");
}

let playRound = (humanChoice, computerChoice) => {
	if
		((humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")) {
		console.log("Congratulations you won")
		humanScore++
	} else if (humanChoice === computerChoice) {
		console.log("It's a draw")
		log.textContent = "It's a draw";
	} else {
		console.log("The computer wins")
		computerScore++
		log.textContent = "The computer wins";
	}

	humanScoreUI.textContent = `Human: ${humanScore}`;
	computerScoreUI.textContent = `Computer: ${computerScore}`;

	if (humanScore >= 5) {
		humanScore = 0;
		computerScore = 0;
		humanScoreUI.textContent = `Human: ${humanScore}`;
		computerScoreUI.textContent = `Computer: ${computerScore}`;
		log.textContent = "Choose: Rock, Paper or Scissors";
		alert("You win!")
	}
	if (computerScore >= 5) {
		computerScore = 0;
		humanScore = 0;
		humanScoreUI.textContent = `Human: ${humanScore}`;
		computerScoreUI.textContent = `Computer: ${computerScore}`;
		log.textContent = "Choose: Rock, Paper or Scissors";
		alert("The computer wins!")
	}
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));



