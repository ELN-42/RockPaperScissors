function getHumanChoice(){
    let answer = prompt("Please enter your choice: ").toLowerCase();
    return answer;
}

function getComputerChoice(){
    let value = Math.random();
    if(value>0.66){
        return "scissors";
    }
    else if(value>0.33){
        return "rock";
    }
    else{
        return "paper";
    } 
}

function playRound(computer, human){
    if(human === computer){
        return "draw";
    }
    else if(human == "scissors"){
        if(computer == "rock"){
            console.log("You lose! "+computer + " beats " + human);
            return "com";
        }
        else{
            console.log("You won! "+ human + " beats " + computer);
            return "hum";
        }
    }
    else if(human == "rock"){
        if(computer == "paper"){
            console.log("You lose! "+computer + " beats " + human);
            return "com";
        }
        else{
            console.log("You won! "+ human + " beats " + computer);
            return "hum";
        }
    }
    else{
        if(computer == "scissors"){
            console.log("You lose! "+computer + " beats " + human);
            return "com";
        }
        else{
            console.log("You won! "+ human + " beats " + computer);
            return "hum";
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    while(humanScore < 5 && computerScore < 5){
        let round = playRound(getComputerChoice(), getHumanChoice());
        if(round=="hum"){
            humanScore++;
        }
        else if(round == "com"){
            computerScore++;
        }
    }

    if(humanScore == 5){
        console.log("You have won! Computer Score: "+ computerScore + " Human Score: "+ humanScore);
    }
    else{
        console.log("You have lost! Computer Score: "+ computerScore + " Human Score: "+ humanScore);
    }
}

playGame();






