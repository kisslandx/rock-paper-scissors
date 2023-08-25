
function game(){

    function getComputerChoice(){
        const choices = ["rock", "paper", "scissor"]
    
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    function getPlayerChoice(){
        const userChoice = prompt("Hello, pick your weapon. [rock, paper or scissor]").toLowerCase();
        return userChoice;
    }

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    function determineWinner(playerSelection, computerSelection){
        if (playerSelection == computerSelection){
            return "It's a draw. " + "You picked " + playerSelection  + " the computer picked " + computerSelection + ".";
        } else if(
            (playerSelection == "rock" && computerSelection == "scissor") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissor" && computerSelection == "paper")
        ){
            return "You won! " + playerSelection + " beats " + computerSelection + ".";
        } else {
            return "You lose! " + playerSelection + " gets defeated by " + computerSelection + ".";
        }
    }

    const result = determineWinner(playerSelection, computerSelection);
    console.log(result)
}

game();