let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("rButton");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function ResetScore(){
    userScore = 0
    computerScore = 0 
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML =  `Score has been reset.`
}


function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, compChoice){
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You Win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 250)
}

function lose(userChoice, compChoice){
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = ` ${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lose.`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 250)
}

function draw(userChoice, compChoice){
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML =  `You both pick ${convertToWord(userChoice)}, Draw.`
    document.getElementById(userChoice).classList.add('orange-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('orange-glow') }, 250)  
}


function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function game(userChoice){
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s")
    })

    reset_div.addEventListener('click', function(){
        ResetScore()
    })


}

main();