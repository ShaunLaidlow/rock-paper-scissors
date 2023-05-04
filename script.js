function getComputerChoice() {
    //randomly generate a value from 0 to 1
    let choice = Math.random();

    if(choice < 0.33){
        choice = 0
        //0 means rock
    }
    else if(choice < 0.66){
        choice = 1
        //1 means paper
    }
    else {
        choice = 2
        //2 means scissors
    }
    return choice;

}

function getUserChoice() {
    let choice = prompt("What are you throwing?").toLowerCase();
    if(choice == "rock"){
        choice = 0;
    }
    if(choice == "paper"){
        choice = 1;
    }
    if(choice == "scissors"){
        choice = 2;
    }
    return choice;
}




let user_choice = getUserChoice();
let computer_choice = getComputerChoice();
console.log(computer_choice);