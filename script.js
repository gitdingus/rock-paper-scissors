const playerScoreP = document.querySelector('#player1-score');
const computerScoreP = document.querySelector('#computer-score');
const playerChoiceDiv = document.querySelector('#battleground.player1');
const computerChoiceDiv = document.querySelector('#battleground.computer');
const rockButton = document.querySelector('button.rock');
const paperButton = document.querySelector('button.paper');
const scissorsButton = document.querySelector('button.scissors');

let playerScore = 0;
let computerScore = 0;

playerScoreP.textContent = playerScore;
computerScoreP.textContent = computerScore;

function computerPlay(){
    let rand = Math.floor(Math.random() * 3);

    switch (rand){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            console.log("Error in computerPlay()");
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++){
        console.log(`Round ${i} of 5`);
        let choice = prompt("Rock, Paper, or Scissors: ");
        let computerChoice = computerPlay();
        
        let result = playRound(choice, computerChoice);

        if (result === 0){
            console.log(`Draw! Both players chose ${computerChoice}`);
        }
        else if (result === -1){
            console.log(`You lose! ${computerChoice} beats ${choice}`);
            computerScore++;
        }
        else if (result === 1){
            console.log(`You win! ${choice} beats ${computerChoice}`);
            playerScore++;
        }

    }

    console.log(`Final Score - Player: ${playerScore} - Computer: ${computerScore}`);


}

function playRound(playerSelection, computerSelection){

    //In relation to playerSelection
    //returns -1 for loss, 0 for draw, 1 for win

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return 0;
    }

    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return -1;
        }
        else if (computerSelection === "scissors"){
            return 1;
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return 1;
        }
        else if (computerSelection === "scissors"){
            return -1;
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return 1;
        }
        else if (computerSelection === "rock"){
            return -1;
        }
    }

    //function should never get here
    return 0;


}
