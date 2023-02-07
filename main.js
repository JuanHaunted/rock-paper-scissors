const WinnerMat = [[0, 1, 2], [2, 0, 1], [1, 2, 0]];
let playerWon = 0;
let computerWon = 0;
let flag = true;

function getComputerAnswer() {
    return Math.floor((Math.random() * 3))
}

function getPlayerAnswer() {
    let selection = prompt("Rock, paper or scissors?");
    if (selection.toLowerCase() == "rock") {
        return 0;
    } else if (selection.toLowerCase() == "paper") {
        return 1;
    } else { return 2; }
}

function numToRockPaperScissor(ans) {
    if (ans == 0){
        return "rock";
    } else if (ans == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function evalWinner(playerAnswer, computerAnswer) {
    let strPlayerAns = numToRockPaperScissor(playerAnswer);
    let strComputerAns = numToRockPaperScissor(computerAnswer)

    let outcome = WinnerMat[computerAnswer][playerAnswer];
    if (outcome == 1) {
        playerWon++;
        return `Player won, ${strPlayerAns} beats ${strComputerAns}`;
    } else if (outcome == 2){
        computerWon++;
        return `Player won, ${strComputerAns} beats ${strPlayerAns}`;
    } else {
        return `It's a tie, the current standing is ${playerWon.toString() + "-" + computerWon.toString()}`;
    }
}

//console.log(getPlayerAnswer());

for (let i = 0; i < 5; i++) {
    let playerAns = getPlayerAnswer();
    let computerAns = getComputerAnswer();
    console.log(evalWinner(playerAns, computerAns));
    if (i == 4) {
        if (playerWon > computerWon){
            console.log(`Player Wins! (${playerWon} to ${computerWon})`);
        } else if (computerWon > playerWon){
            console.log(`Computer Wins! (${computerWon} to ${playerWon})`);
        } else {
            console.log(`It's a tie (${playerWon} to ${computerWon})`)
        }
    }
}



