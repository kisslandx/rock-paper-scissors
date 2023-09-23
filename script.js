const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const playerScoreDiv = document.querySelector('#player-score')
const computerScoreDiv = document.querySelector('#computer-score')
const winner = document.querySelector('#winner')
const playAgain = document.querySelector('#play-again')
const title = document.querySelector('#title')

let playerScore = 0;
let computerScore = 0;


function game(){
    playAgain.style.display = "none";

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

            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            
            playAgain.style.display = "block";
        }
    }

    playAgain.addEventListener('click', () => {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;

        playAgain.style.display = "none";

        playerScore = 0;
        computerScore = 0;
        playerScoreDiv.textContent = "";
        computerScoreDiv.textContent = "";
        winner.textContent = "";
        results.textContent = "";

        title.style.display = "block";
        
    })

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
        title.style.display = "none";
    
    }
    )
    
    paper.addEventListener('click', () => {
        playRound('paper')
        title.style.display = "none";

    })
    
    scissors.addEventListener('click', () =>{
        playRound('scissors')
        title.style.display = "none";

    })
}

game();

