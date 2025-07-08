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

function updateScoreDisplay() {
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(message, resultType) {
    const resultsDiv = document.getElementById('results');
    const resultElement = document.createElement('div');
    resultElement.className = `round-result ${resultType}`;
    resultElement.textContent = message; // ADDED: Set the text content
    resultsDiv.appendChild(resultElement);

    while (resultsDiv.children.length > 5) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
}

function checkGameWinner() {
    if (humanScore >= 5) { // FIXED: >= instead of =>
        const winnerDiv = document.createElement('div');
        winnerDiv.className = 'game-winner winner'; 
        winnerDiv.textContent = '🎉 Congratulations! You won the game! 🎉';
        document.getElementById('results').appendChild(winnerDiv); // ADDED: Add to page

        document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
        document.getElementById('restart-btn').style.display = 'inline-block';

        return true;
    } else if (computerScore >= 5) { // ADDED: Check for computer win
        const winnerDiv = document.createElement('div');
        winnerDiv.className = 'game-winner loser';
        winnerDiv.textContent = '😞 Game Over! Computer won the game! 😞';
        document.getElementById('results').appendChild(winnerDiv);
        
        document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
        document.getElementById('restart-btn').style.display = 'inline-block';
        
        return true;
    }
    return false;
}

function playRound (humanValue, computerValue){
    let message, resultType; // ADDED: Declare variables
    
    if (humanValue == 'rock' && computerValue == 'scissors'){
        humanScore++;
        message = 'You won! Rock beats scissors!';
        resultType = 'win';
    }else if (humanValue == 'scissors' && computerValue == 'rock'){
        computerScore++;
        message = 'You lost! Rock beats scissors!';
        resultType = 'lose';
    }else if (humanValue == 'paper' && computerValue == 'rock'){
        humanScore++;
        message = 'You won! Paper beats rock!';
        resultType = 'win';
    }else if (humanValue == 'rock' && computerValue == 'paper'){
        computerScore++;
        message = 'You lost! Paper beats rock!';
        resultType = 'lose';
    }else if (humanValue == 'scissors' && computerValue == 'paper'){
        humanScore++;
        message = 'You won! Scissors beats paper!'; // FIXED: typo and logic
        resultType = 'win';
    }else if (humanValue == 'paper' && computerValue == 'scissors'){
        computerScore++;
        message = 'You lost! Scissors beats paper!';
        resultType = 'lose';
    }else if (humanValue === computerValue){
        message = "Draw! The score doesn't change!";
        resultType = 'draw';
    }else{
        message = "Error! You have an invalid answer. Try again! (valid answers: rock paper scissors)";
        resultType = 'draw';
    }

    const choiceMessage = `You chose ${humanValue}, Computer chose ${computerValue}`;
    displayResult(choiceMessage, 'draw');
    displayResult(message, resultType);

    updateScoreDisplay();
    checkGameWinner();
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    document.getElementById('results').innerHTML = '<p>Click a button to start playing!</p>';
    document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = false);
    document.getElementById('restart-btn').style.display = 'none';
}

document.getElementById('rock-btn').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

document.getElementById('paper-btn').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

document.getElementById('scissors-btn').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
});