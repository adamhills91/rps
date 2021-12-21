let playerScore = 0, computerScore = 0;
const buttons = document.querySelectorAll('button');
const replay = document.getElementById('replay');
replay.addEventListener('click', reset);
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const computerChoiceDisplay = document.getElementById('computer-choice');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        if (computerScore < 5 && playerScore < 5) {
        let result = playRound(e.target);
        switch (result) {
            case 1:
                resultDisplay.textContent = "Yay!";
                break;
            case 0: 
                resultDisplay.textContent = "Oh dear, oh dear!";
                break;
            case -1:
                resultDisplay.textContent = "Go again..."
                break;
        }
        let resultTarget = [result, e.target];
        buttonGlow(resultTarget);
        calculateScore(result);
        }
    })
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection.id === 'rock') {
        if (computerSelection === 'Paper') {
            computerChoiceDisplay.src = "images/paper.jpg";
            return 0;
        }
        else if (computerSelection === 'Scissors') {
            computerChoiceDisplay.src = "images/scissors.jpg";
            return 1;
        } else {
            computerChoiceDisplay.src = "images/rock.jpg";
            return -1;
        } 
    
    } else if (playerSelection.id === 'paper') {
        if (computerSelection === 'Scissors') {
            computerChoiceDisplay.src = "images/scissors.jpg";
            return 0;
        }
        else if (computerSelection === 'Rock') {
            computerChoiceDisplay.src = "images/rock.jpg";
            return 1;
        } else {
            computerChoiceDisplay.src = "images/paper.jpg";
            return -1;
        } 
    }  else if (playerSelection.id === 'scissors') {
        if (computerSelection === 'Paper') {
            computerChoiceDisplay.src = "images/paper.jpg";
            return 1;
        }
        else if (computerSelection === 'Rock') {
            computerChoiceDisplay.src = "images/rock.jpg";
            return 0;
        } else {
            computerChoiceDisplay.src = "images/scissors.jpg";
            return -1;
        } 
}
}

function computerPlay() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else if (computerChoice === 2) {
        return 'Scissors';
    }
}


function calculateScore(result) {
        if (result === 1) {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            if (playerScore === 5) {
                playerScoreDisplay.style.color = '#2ACE36';
                resultDisplay.style.color = '#2ACE36';
                resultDisplay.textContent = "You Win!"
                replay.textContent = "Replay?";
            }
        } else if (result === 0) {
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            if (computerScore === 5) {
                computerScoreDisplay.style.color = '#d62323';
                resultDisplay.style.color = '#d62323';
                resultDisplay.textContent = "You Lose!"
                replay.textContent = "Replay?";
            }
        }
}

function buttonGlow(resultTarget) {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('button-win', 'button-tie', 'button-loss');   
        }
        if (resultTarget[0] === 1) {
            resultTarget[1].classList.add('button-win');
        } else if (resultTarget[0] === 0) {
            resultTarget[1].classList.add('button-loss');
        } else {
            resultTarget[1].classList.add('button-tie');
        
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.style.color = 'black';
    playerScoreDisplay.style.color = 'black';
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('button-win', 'button-tie', 'button-loss');   
    }
    computerChoiceDisplay.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    resultDisplay.textContent = "";
    resultDisplay.style.color = 'black';
    replay.textContent = "";
}