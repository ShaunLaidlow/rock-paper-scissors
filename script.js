function getComputerChoice() {
    //randomly generate a value from 0 to 1
    let choice = Math.random();

    if(choice < 0.33){
        choice = "rock";
    }
    else if(choice < 0.66){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;

}

function getUserChoice() {
    let choice = prompt("What are you throwing?").toLowerCase();
    console.log(choice)
    return choice;
}

function selectWinner(user,comp){
    let statement;
    if(user == comp){
        statement = "It's a Draw"
    }
    if(user == "rock"){
        if (comp == "paper"){
            statement = "You Lose! Paper beats Rock";
        }
        if (comp == "scissors"){
            statement = "You Win! Rock beats Scissors";
        }
    }
    if(user == "paper"){
        if(comp== "scissors"){
            statement = "You Lose! Scissors beats Paper";
        }
        if(comp == "rock"){
            statement = "You Win! Paper beats Rock";
        }
    }
    if(user == "scissors"){
        if(comp== "rock"){
            statement = "You Lose! Rock beats Scissors";
        }
        if(comp == "paper"){
            statement = "You Win! Scissors beats Paper";
        }
    }

    return statement;
}





let user_choice = getUserChoice();
let computer_choice = getComputerChoice();
let decision = selectWinner(user_choice,computer_choice)
console.log(decision);