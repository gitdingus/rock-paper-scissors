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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "Draw! Both players chose " + computerSelection;
    }

    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return "You lose! Paper beats rock!";
        }
        else if (computerSelection === "scissors"){
            return "You win! Rock beats scissors!";
        }
    }

    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats rock!";
        }
        else if (computerSelection === "scissors"){
            return "You lose! Scissors beats paper!";
        }
    }

    if (playerSelection === "scissors"){
        if (computerSelection === "paper"){
            return "You win! Scissors beats paper!";
        }
        else if (computerSelection === "rock"){
            return "You lose! Rock beats scissors!";
        }
    }


}