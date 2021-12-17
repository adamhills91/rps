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

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Make your choice').toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            return 'You Win! Rock beats Paper';
        }
        else if (computerSelection === 'Scissors') {
            return 'You Lose! Scissors beats Rock';
        }
        else {
            return 'It\'s a tie!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'Scissors') {
            return 'You Lose! Scissors beats Paper';
        }
        else if (computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock';
        }
        else {
            return 'It\'s a tie!';
        }
    }  else if (playerSelection === 'scissors') {
        if (computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper';
        }
        else if (computerSelection === 'Rock') {
            return 'You Lose! Rock beats Scissors';
        }
        else {
            return 'It\'s a tie!';
        }
    } 
    else {
        return playRound();
    }
}

game(); 

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('Let\'s play ROCK! PAPER! SCISSORS!!!');
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`Well done! You won ${playerScore}:${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Oh dear, oh dear! You lost ${playerScore}:${computerScore}`);
    } else {
        console.log(`It's a tie! ${playerScore}:${computerScore}`);
    }
}