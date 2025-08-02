let game = document.querySelector('.game');
let buttons = document.querySelectorAll('.btn');
let resetButton = document.querySelector('.reset');
let youScore = document.querySelector('.you');
let computerScoreDisplay = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

const choices = [stone = "Stone", paper = "Paper", scissor = "Scissor"];

let playerChoice = "";
let computerChoice = "";

const winPatterns = [
    stone === paper,
    paper === scissor,
    scissor === stone,

];
buttons.forEach((buttons) => 
    buttons.addEventListener('click', (e) => {
        playerChoice = e.target.innerText;
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Player: ${playerChoice}, Computer: ${computerChoice}`);
        determineWinner(playerChoice, computerChoice);
    }));

    let determineWinner = (player, computer) => {
        if (player === computer) {
            console.log("It's a tie!");
        } else if ((player === "Stone" && computer === "Scissor") ||
                   (player === "Paper" && computer === "Stone") ||
                   (player === "Scissor" && computer === "Paper")) {
            console.log("Player wins!");
            playerScore++;
            youScore.innerText = playerScore;
        } else {
            console.log("Computer wins!");
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
        }}
