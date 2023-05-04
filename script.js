function getComputerChoice() {
    let choice = Math.random();
    if(choice < 0.33){
        choice = "Rock!"
    }
    else if(choice < 0.66){
        choice = "Paper!"
    }
    else {
        choice = "Scissors!"
    }
    console.log(choice);

}

getComputerChoice();