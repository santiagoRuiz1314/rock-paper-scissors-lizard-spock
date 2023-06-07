var computerPlay;
var start = 0

// start button 
// need to lock out rest of game here until button has been clicked

let startButton = document.getElementById("start")

startButton.addEventListener("click",function() {
    start = 1;
    console.log(start)
    document.getElementById("player-image").style.background = ""
    document.getElementById("computer-image").style.background = ""

    setTimeout(()=> {
        document.getElementById('computer-image').innerText = "Waiting for player";
     }
     ,500);
})

/* Set-up event listeners for the 5 player choice options
* and games functions when clicked
*/

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

rockButton.addEventListener("click",function() {
    playerChoice('rock');
    computerChoice();
    runGame('rock');
})

paperButton.addEventListener("click",function() {
    playerChoice('paper');
    computerChoice();
    runGame('paper');
})

scissorsButton.addEventListener("click",function() {
    playerChoice('scissors');
    computerChoice();
    runGame('scissors');
})

lizardButton.addEventListener("click",function() {
    playerChoice('lizard');
    computerChoice();
    runGame('lizard');
})

spockButton.addEventListener("click",function() {
    playerChoice('spock');
    computerChoice();
    runGame('spock');
})

/*
* Feeds correct image into player selection area based 
* on what is clicked
*/

function playerChoice(playType) {
    switch (playType) {
        case "rock":
            document.getElementById('player-image').style.background="url(/assets/images/Rock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            console.log("player picks rock");
            break;
        case "paper":
            document.getElementById('player-image').style.background="url(/assets/images/Paper.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            console.log("player picks paper");
            break;
        case "scissors":
            document.getElementById('player-image').style.background="url(/assets/images/Scissors.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            console.log("player picks scissors");
            break; 
        case "lizard":
            document.getElementById('player-image').style.background="url(/assets/images/Lizard.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            console.log("player picks lizard");
            break;
        case "spock":
            document.getElementById('player-image').style.background="url(/assets/images/Spock.png)";
            document.getElementById('player-image').style.backgroundSize="cover";
            console.log("player picks spock");
            break;
    }
  }

/* 
* Random number generator makes computer choice and 
* function feeds the correct image into the computer 
* selection area of the game
*/

function computerChoice() {
    
    computerPlay = Math.floor(Math.random() * 5)
   
    switch (computerPlay) {
        case 0:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(/assets/images/Rock.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            console.log("computer picks rock");
            break;
        case 1:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(/assets/images/Paper.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            console.log("computer picks paper");
            break;
        case 2:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(/assets/images/Scissors.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            console.log("computer picks scissors");
            break; 
        case 3:
            document.getElementById('computer-image').innerText = "";    
            document.getElementById('computer-image').style.background="url(/assets/images/Lizard.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            console.log("computer picks lizard");
            break;
        case 4:
            document.getElementById('computer-image').innerText = "";
            document.getElementById('computer-image').style.background="url(/assets/images/Spock.png)";
            document.getElementById('computer-image').style.backgroundSize="cover";
            console.log("computer picks spock");
            break;
    }
}

// main game function loop 

// issues with playType being carried through functions

function runGame(playType) {
    console.log(computerPlay);
    console.log(playType);

    switch (computerPlay){
    case 0:
        if (playType == "paper") {
            console.log("User wins!");
            resultMsg("rockPaper");
            playerScore();
        } else if (playType == "spock") {
            console.log("User wins!");
            resultMsg("rockSpock");
            playerScore();
        } else if (playType == "rock") {
            console.log("Draw");
            resultMsg("draw");
        } else if (playType == "lizard") {
            console.log("Computer wins");
            resultMsg("rockLizard");
            computerScore();
        } else {
            console.log("Computer wins");
            resultMsg("rockScissors");
            computerScore();
        } 
        break;
        
    case 1:
        if (playType == "paper") {
            console.log("Draw");
            resultMsg("draw");
        } else if (playType == "spock") {
            console.log("Computer wins!");
            resultMsg("paperSpock");
            computerScore();
        } else if (playType == "rock") {
            console.log("Computer wins!");
            resultMsg("paperRock");
            computerScore();
        } else if (playType == "lizard") {
            console.log("Player wins");
            resultMsg("paperLizard");
            playerScore();
        } else {
            console.log("Player wins");
            resultMsg("paperScissors");
            playerScore(); 
        } 
        break;

    case 2:
        if (playType == "paper") {
            console.log("Computer wins!");
            resultMsg("scissorsPaper");
            computerScore();
        } else if (playType == "spock") {
            console.log("Player wins!");
            resultMsg("scissorsSpock");
            playerScore();
        } else if (playType == "rock") {
            console.log("Player wins!");
            resultMsg("scissorsRock");
            playerScore();
        } else if (playType == "lizard") {
            console.log("Computer wins");
            resultMsg("scissorsLizard");
            computerScore();
        } else {
            console.log("Draw");
            resultMsg("draw");
        } 
        break;

    case 3:
        if (playType == "paper") {
            console.log("Computer wins!");
            resultMsg("lizardPaper");
            computerScore();
        } else if (playType == "spock") {
            console.log("Computer wins!");
            resultMsg("lizardSpock");
            computerScore();
        } else if (playType == "rock") {
            console.log("Player wins!");
            resultMsg("lizardRock");
            playerScore();
        } else if (playType == "lizard") {
            console.log("Draw");
            resultMsg("draw");
        } else {
            console.log("Player wins!");
            resultMsg("lizardScissors");
            playerScore();
        } 
        break;

    case 4:
        if (playType == "paper") {
            console.log("Player wins!");
            resultMsg("spockPaper");
            playerScore();
        } else if (playType == "spock") {
            console.log("Draw");
            resultMsg("draw");
        } else if (playType == "rock") {
            console.log("Computer wins!");
            resultMsg("spockRock");
            computerScore();
        } else if (playType == "lizard") {
            console.log("Player wins!");
            resultMsg("spockLizard");
            playerScore();
        } else {
            console.log("Computer wins!");
            resultMsg("spockScissors");
            computerScore();
        } 
        break;
    }
}

/*
* Takes outcome from runGame and displays 
* the correct results message for that round
*/

function resultMsg (resultType) {
    switch (resultType){
        case "draw":
            document.getElementById("result-para").innerText = "Its a draw - go again!";
            document.getElementById("result-para").style.borderColor = "#6FA8DC";
            break; 

        case "rockPaper":
            document.getElementById("result-para").innerText = "Paper covers rock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockSpock":
            document.getElementById("result-para").innerText = "Spock vaporizes rock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "rockLizard":
            document.getElementById("result-para").innerText = "Rock crushes lizard - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "rockScissors":
            document.getElementById("result-para").innerText = "Rock crushes scissors - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "paperRock":
            document.getElementById("result-para").innerText = "Paper covers rock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "paperScissors":
            document.getElementById("result-para").innerText = "Scissors cut paper - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperLizard":
            document.getElementById("result-para").innerText = "Lizard eats paper - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "paperSpock":
            document.getElementById("result-para").innerText = "Paper disproves spock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "scissorsRock":
            document.getElementById("result-para").innerText = "Rock crushes scissors - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "scissorsPaper":
            document.getElementById("result-para").innerText = "Scissors cut paper - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsLizard":
            document.getElementById("result-para").innerText = "Scissors decapitates lizard - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "scissorsSpock":
            document.getElementById("result-para").innerText = "Spock smashes scissors - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;

        case "lizardRock":
            document.getElementById("result-para").innerText = "Rock crushes lizard - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardPaper":
            document.getElementById("result-para").innerText = "Lizard eats paper - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "lizardScissors":
            document.getElementById("result-para").innerText = "Scissors decapitates lizard - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "lizardSpock":
            document.getElementById("result-para").innerText = "Lizard poisons spock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;

        case "spockRock":
            document.getElementById("result-para").innerText = "Spock vaporizes rock - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockPaper":
            document.getElementById("result-para").innerText = "Paper disproves spock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
        case "spockScissors":
            document.getElementById("result-para").innerText = "Spock smashes scissors - computer wins!";
            document.getElementById("result-para").style.borderColor = "red";
            break;
        case "spockLizard":
            document.getElementById("result-para").innerText = "Lizard poisons spock - player wins!";
            document.getElementById("result-para").style.borderColor = "green";
            break;
    }
}


/* 
* Checks if either score is at 10 and declares a winner
* If score hasn't reached 10, declares winner for the round
* and updates score counter
*/

function playerScore() {
    let pScore = document.getElementById("pScore").innerText;

    if (pScore <=9) {
        document.getElementById("pScore").innerText = ++pScore;
        console.log(playerScore);
    } else {
        document.getElementById("result-para").innerText = "Player wins! Click Start to play again.";
        document.getElementById("result-para").style.backgroundColor = "green";
        document.getElementById("result-para").style.color = "white";
        // add in start button lock out here
    }
}

function computerScore() {
    let cScore = document.getElementById("cScore").innerText;

    if (cScore <=9) {   
    document.getElementById("cScore").innerText = ++cScore;
    console.log(computerScore);
    } else {
        document.getElementById("result-para").innerText = "Unlucky! Computer wins! Click Start to play again.";
        document.getElementById("result-para").style.backgroundColor = "red";
        document.getElementById("result-para").style.color = "white";
        // add in start button lock out here
    }
}
