let choices = document.querySelectorAll(".choice");

let result = document.querySelector("#result");

let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let userScore = 0;
let compScore = 0;

const getComputerChoice = () => {

    let options = ["Stone", "Paper", "Scissors"];

    let randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
};

const playGame = (userChoice) => {

    let compChoice = getComputerChoice();

    if(userChoice === compChoice){
        result.innerText = `Draw! Computer chose ${compChoice}`;
        return;
    }

    let userWin = true;

    if(userChoice === "Stone"){
        userWin = compChoice === "Paper" ? false : true;
    }

    else if(userChoice === "Paper"){
        userWin = compChoice === "Scissors" ? false : true;
    }

    else{
        userWin = compChoice === "Stone" ? false : true;
    }

    if(userWin){

        userScore++;
        userScorePara.innerText = userScore;

        result.innerText = `You Win! Computer chose ${compChoice}`;
    }

    else{

        compScore++;
        compScorePara.innerText = compScore;

        result.innerText = `Computer Wins! Computer chose ${compChoice}`;
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        let userChoice = choice.innerText;

        playGame(userChoice);

    });

});