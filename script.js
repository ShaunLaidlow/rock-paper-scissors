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
    let choice;
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("What are you throwing?").toLowerCase();
    }
    return choice;
}

function selectWinner(user,comp){
    console.log("users: "+ user + " computers: " + comp)
    let statement;
    let winner;
    if(user == comp){
        statement = "It's a Draw"
        winner = "draw";
    }
    if(user == "rock"){
        if (comp == "paper"){
            statement = "You Lose! Paper beats Rock";
            winner = "comp";
        }
        if (comp == "scissors"){
            statement = "You Win! Rock beats Scissors";
            winner = "user";
        }
    }
    if(user == "paper"){
        if(comp== "scissors"){
            statement = "You Lose! Scissors beats Paper";
            winner = "comp";
        }
        if(comp == "rock"){
            statement = "You Win! Paper beats Rock";
            winner = "user";
        }
    }
    if(user == "scissors"){
        if(comp== "rock"){
            statement = "You Lose! Rock beats Scissors";
            winner = "comp";
        }
        if(comp == "paper"){
            statement = "You Win! Scissors beats Paper";
            winner = "user";
        }
    }
    console.log(statement)
    return winner;
}


function playRound(){
    let user_choice = getUserChoice();
    let computer_choice = getComputerChoice();
    let winner = selectWinner(user_choice,computer_choice)
    return winner;
}

function game(){
    let user_score = 0;
    let comp_score = 0;
    for(let i = 0; i < 5; i++){
        winner = playRound();
        if (winner == "user"){
            user_score++;
        }
        else{
            comp_score++;
        }
    }
    if(user_score > comp_score){
        return "You Did It!"
    }
    else if(user_score < comp_score){
        return "Try Again"
    }
    else{
        return "It's a Draw"
    }
}

console.log(game());