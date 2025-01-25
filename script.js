const rps = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    computerValue = rps[getRandomInt(3)];
    return computerValue;
}

function getHumanChoice(){
    let choice = prompt('Make a decision (rock, paper scissors): ');
    humanValue = choice.toLowerCase();
    return humanValue;
}

function playRound (humanValue, computerValue){
    if (humanValue == 'rock' && computerValue == 'scissors'){
        humanScore++
        console.log('You won! Rock beats scissors!');
    }else if (humanValue == 'scissors' && computerValue == 'rock'){
        computerScore++
        console.log('You lost! Rock beats scissors!');
    }else if (humanValue == 'paper' && computerValue == 'rock'){
        humanScore++
        console.log('You won! Paper beats rock!');
    }else if (humanValue == 'rock' && computerValue == 'paper'){
        computerScore++
        console.log('You lost! Paper beats rock!');
    }else if (humanValue == 'scissors' && computerValue == 'paper'){
        humanScore++
        console.log('You own! Scissors beats rock!');
    }else if (humanValue == 'paper' && computerValue == 'scissors'){
        computerScore++
        console.log('You lost! Scissors beats paper!');
    }else if (humanValue === computerValue){
        console.log("Draw! The score doesn't change!");
    }else{
        console.log("Error! You have an invalid answer. Try again! (valid answers: rock paper scissors)");
    }
    

}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); // Call the playRound function
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
