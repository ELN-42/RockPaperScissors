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
    const result = document.querySelector("#resultscreen");

    let humanscore = document.querySelector(".humscore");
    let currenthumscore = Number(humanscore.textContent);

    let comscore = document.querySelector(".comscore");
    let currentcomscore = Number(comscore.textContent);
    console.log(human);
    if(human === computer){
        result.textContent = "That was a draw. Try again!";
    }
    else if(human == "scissors"){
        if(computer == "rock"){
            result.textContent = "You lose! "+computer + " beats " + human;
            currentcomscore++;
            comscore.textContent = currentcomscore;
        }
        else{
            result.textContent = "You won! "+ human + " beats " + computer;
            currenthumscore++;
            humanscore.textContent = currenthumscore;
        }
    }
    else if(human == "rock"){
        if(computer == "paper"){
            result.textContent = "You lose! "+computer + " beats " + human;
            currentcomscore++;
            comscore.textContent = currentcomscore;
        }
        else{
            result.textContent = "You won! "+ human + " beats " + computer;
            currenthumscore++;
            humanscore.textContent = currenthumscore;
        }
    }
    else{
        if(computer == "scissors"){
            result.textContent = "You lose! "+computer + " beats " + human;
            currentcomscore++;
            comscore.textContent = currentcomscore;
        }
        else{
            result.textContent = "You won! "+ human + " beats " + computer;
            currenthumscore++;
            humanscore.textContent = currenthumscore;
        }
    }
    if(currentcomscore >= 5){
        
        alert("The Computer bested you. Better Luck next time!");
        humanscore.textContent = 0;
        comscore.textContent = 0;
    }
    if(currenthumscore >= 5){
        alert("You were victorious. Well done!");
        humanscore.textContent = 0;
        comscore.textContent = 0;
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



const rock = document.querySelector(".rock");
rock.addEventListener("click" , () => playRound(getComputerChoice(), "rock"));

const paper = document.querySelector(".paper");
paper.addEventListener("click" , () => playRound(getComputerChoice(), "paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click" , () => playRound(getComputerChoice(), "scissors"));






