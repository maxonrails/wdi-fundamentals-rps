////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove == computerMove) {
        winner = "tie";

    } else if 
    ((playerMove== "rock" && computerMove=="scissors") ||
    (playerMove== "scissors" && computerMove=="paper") ||     
    (playerMove== "paper" && computerMove=="rock")) {
        winner= "player";
    } else {
        winner = "computer";
    }
    return winner;
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins <5) {
        var playerMove= getPlayerMove();
        var computerMove= getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == "tie") {
    
        }else if (winner == "player") {
            playerWins += 1;
        }else if (winner == "computer") {
            computerWins +=1;
        }
        console.log ("Player choose " + playerMove +  
            " and computer choose " +computerMove +"." +
            " The winner is " +winner +"!");
        console.log ([playerWins, computerWins]);

    }
    console.log ("Game Over!!!");
    return [playerWins, computerWins];
}
playToFive();

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.