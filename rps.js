function getComputerChoice(){
    return Math.random();
}

function transformComputerChoice(){
var computerChoice = getComputerChoice();
    if (computerChoice <= .33333){
        return "Rock";
    }
    else if (computerChoice >.33334 && computerChoice <= .66666){
        return "Paper";
    }
    else if (computerChoice > .66667){
        return "Scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?");
}

function playRound(){
    var humanchoice = getHumanChoice();
    var transformedcomputerchoice = transformComputerChoice();
    alert("Computer chose: " + transformedcomputerchoice);

    if (humanchoice == transformedcomputerchoice){
        alert("Draw!");
    }
    else if (humanchoice =="Rock" && transformedcomputerchoice =="Scissors"){
        alert("You Win with Rock!");
    }
    else if (humanchoice =="Rock" && transformedcomputerchoice =="Paper"){
        alert("You Lose with Rock!");
    }
    else if (humanchoice =="Paper" && transformedcomputerchoice =="Rock"){
        alert("You Win with Paper!");
    }
    else if (humanchoice =="Paper" && transformedcomputerchoice =="Scissors"){
        alert("You Lose with Paper!");
    }
    else if (humanchoice =="Scissors" && transformedcomputerchoice =="Paper"){
        alert("You Win with Scissors!");
    }
    else if (humanchoice =="Scissors" && transformedcomputerchoice =="Rock"){
        alert("You Lose with Scissors!");
    }
}

function playGame (){

    for (let i = 0; i < 5; i++){
        playRound();
    }
}

/*const humanchoice = getHumanChoice();
const transformedcomputerchoice = transformComputerChoice();
console.log(getHumanChoice());
console.log(computerchoice);
console.log("Human chose: " + humanchoice);
console.log("Computer chose: " + transformComputerChoice());*/

console.log(playGame());
