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

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
	humanChoice = humanChoice.trim().toLowerCase();

	if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log("Congratulations you won")
		humanScore++
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("Congratulations you won")
		humanScore++
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log("Congratulations you won")
		humanScore++
	} else if (humanChoice === computerChoice) {
		console.log("It's a draw")
	} else {
		console.log("The computer wins")
		computerScore++
	}
}

for (let i = 0; i < 5; i++) {
	playRound(getHumanChoice(), getComputerChoice());
}

console.log(`Human Score: ${humanScore}, ComputerScore: ${computerScore}`)
