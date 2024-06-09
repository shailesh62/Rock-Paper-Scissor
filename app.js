let userScore = 0;
let compScore = 0;

let us = document.querySelector("#user-score");
let cs = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice == compChoice) {
        msg.innerText = `Draw, computer choice is ${compChoice}`;
    }
    else if ((userChoice == "rock" && compChoice == "scissor") ||
        (userChoice == "paper" && compChoice == "rock") ||
        (userChoice == "scissor" && compChoice == "paper"))
        {
            msg.innerText = `You won, computer choice is ${compChoice}`
            userScore++;
            us.innerText = `${userScore}`;
            msg.style.backgroundColor = "green";
        }
    else if((compChoice == "rock" && userChoice == "scissor") ||
    (compChoice == "paper" && userChoice == "rock") ||
    (compChoice == "scissor" && userChoice == "paper")){
        msg.innerText = `You lost, computer choice is ${compChoice}`;
        compScore++;
        cs.innerText = `${compScore}`;
        msg.style.backgroundColor = "red";
    }    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);
        playGame(choiceId);
    });
}); 