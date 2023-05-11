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


function selectWinner(user,comp){
    let play = document.querySelector(".play");
    play.textContent = "users: "+ user + " computers: " + comp;

    let statement = document.querySelector(".results");
    let winner;
    if(user == comp){
        statement.textContent = "It's a Draw"
        winner = "draw";
    }
    if(user == "rock"){
        if (comp == "paper"){
            statement.textContent = "You Lose! Paper beats Rock";
            winner = "comp";
        }
        if (comp == "scissors"){
            statement.textContent = "You Win! Rock beats Scissors";
            winner = "user";
        }
    }
    if(user == "paper"){
        if(comp== "scissors"){
            statement.textContent = "You Lose! Scissors beats Paper";
            winner = "comp";
        }
        if(comp == "rock"){
            statement.textContent = "You Win! Paper beats Rock";
            winner = "user";
        }
    }
    if(user == "scissors"){
        if(comp== "rock"){
            statement.textContent = "You Lose! Rock beats Scissors";
            winner = "comp";
        }
        if(comp == "paper"){
            statement.textContent = "You Win! Scissors beats Paper";
            winner = "user";
        }
    }
    console.log(statement)
    return winner;
}


function playRound(user){
    let user_choice = user;
    let computer_choice = getComputerChoice();
    let winner = selectWinner(user_choice,computer_choice)
    return winner;
}

function game(winner){
    let tally = document.querySelector('.tally');
    if (winner == "user"){
        user_score++;
    }
    else{
        comp_score++;
    }
    
    if(user_score > 4){
        tally.textContent= "You Did It!"
    }
    else if(comp_score > 4){
        tally.textContent= "Try Again"
    }
    else{
        tally.textContent = `User: ${user_score} | Comp: ${comp_score}`
    }
}
let user_score = 0;
let comp_score = 0;
const rock = document.querySelector('.rock');
rock.addEventListener('click',() => {
    let winner = playRound("rock");
    game(winner);
})

const paper = document.querySelector('.paper');
paper.addEventListener('click',() => {
    let winner = playRound("paper");
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click',() => {
    let winner = playRound("scissors");
})
