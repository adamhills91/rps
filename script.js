let playerScore = 0, computerScore = 0;
const buttons = document.querySelectorAll('button');

for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', function() {
        if (computerScore < 5 && playerScore < 5) {
            const playerScoreDisplay = document.getElementById('player-score');
            const computerScoreDisplay = document.getElementById('computer-score');
            const resultDisplay = document.getElementById('result');
            
            let result = playRound(buttons[j].id);
             if (result === 1) {
             playerScore++;
                console.log('player score is ' + playerScore);
                playerScoreDisplay.textContent = playerScore;
                if (playerScore === 5) {
                    playerScoreDisplay.style.color = '#2ACE36';
                    resultDisplay.textContent = "You win!"
                }
            } else if (result === 0) {
                computerScore++
                console.log('computer score is ' + computerScore);
                computerScoreDisplay.textContent = computerScore;
                if (computerScore === 5) {
                   computerScoreDisplay.style.color = '#2ACE36';
                   resultDisplay.textContent = "You lose!"
                }
            } else {
                console.log('tie');
            }
        }
    }); 
}

function playRound(playerSelection) {
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const computerSelection = computerPlay();
    playerChoiceDisplay.textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerChoiceDisplay.textContent = computerSelection;

    if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            return 0;
        }
        else if (computerSelection === 'Scissors') {
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'Scissors') {
            return 0;
        }
        else if (computerSelection === 'Rock') {
            return 1;
        }
    }  else if (playerSelection === 'scissors') {
        if (computerSelection === 'Paper') {
            return 1;
        }
        else if (computerSelection === 'Rock') {
            return 0;
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