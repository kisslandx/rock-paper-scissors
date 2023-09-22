const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const playerScoreDiv = document.querySelector('#player-score')
const computerScoreDiv = document.querySelector('#computer-score')
const winner = document.querySelector('#winner')

let playerScore = 0;
let computerScore = 0;


function game(){


    let getComputerChoice = () => {
        const choices = ["rock", "paper", "scissors"]
    
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }


    let updateScores = () => {
        winner.textContent = "";
        playerScoreDiv.textContent = "Player score: " + playerScore;
        computerScoreDiv.textContent = "Computer score: " + computerScore;

        if(playerScore === 5 || computerScore === 5){
            winner.textContent = (playerScore === 5) ? "Player wins!": "Computer wins!";

            playerScore = 0;
            computerScore = 0;
        }


    }

    let playRound = (playerChoice) =>{
        const computerChoice = getComputerChoice();

        if (playerChoice === computerChoice) {
            results.textContent = `It's a draw! Both chose ${playerChoice}.`;
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore++;
            results.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;
        } else {
            computerScore++;
            results.textContent = `You lose this round. ${computerChoice} beats ${playerChoice}.`;
        }
        
        updateScores();
    }

    rock.addEventListener('click', () => {
        playRound('rock');
    
    }
    )
    
    paper.addEventListener('click', () => {
        playRound('paper')
    })
    
    scissors.addEventListener('click', () =>{
        playRound('scissors')
    })
}

game();

