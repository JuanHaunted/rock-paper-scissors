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

function evalWinner(playerAnswer, computerAnswer) {
    let outcome = WinnerMat[computerAnswer][playerAnswer];
    if (outcome == 1) {
        playerWon++;
        return `Player won, it has ${playerWon} wins`;
    } else if (outcome == 2){
        computerWon++;
        return `Computer won, it has ${computerWon} wins`;
    } else {
        return `It's a tie, the current standing is ${playerWon.toString() + "-" + computerWon.toString()}`;
    }
}

//console.log(getPlayerAnswer());

for (let i = 0; i < 5; i++) {
    let playerAns = getPlayerAnswer();
    let computerAns = getComputerAnswer();
    console.log(evalWinner(playerAns, computerAns));
}



