function getComputerChoice(){
    return Math.random();
}

const computerchoice = getComputerChoice();

function transformComputerChoice(){

    if (computerchoice <= .33333){
        return "Rock";
    }
    else if (computerchoice >.33334 && computerchoice <= .66666){
        return "Paper";
    }
    else if (computerchoice > .66667){
        return "Scissors";
    }
}

function getHumanChoice(){
    const humanchoice = prompt("Rock, Paper, or Scissors?");
    return humanchoice;
}

function playRound(){
    let humanchoice = getHumanChoice();
    let transformedcomputerchoice = transformComputerChoice();

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
    else alert(humanchoice);
    
    
}


/*console.log(getHumanChoice());*/
console.log(computerchoice);
console.log(transformComputerChoice());
console.log(playRound());
