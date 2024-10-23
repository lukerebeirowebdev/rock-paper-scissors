let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("spo");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'spo'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    if (letter === "s") return "scissors";
    if (letter === "l") return "lizard";
    if (letter === "spo") return "spock";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
    result_p.innerHTML = `Players ${convertToWord(userChoice)} beats Computers ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
    result_p.innerHTML = `Computers ${convertToWord(userChoice)} beats Players ${convertToWord(computerChoice)}. You lost!`;
}


function draw(userChoice, computerChoice) {
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('gray-glow') }, 300);
    result_p.innerHTML = ` Players ${convertToWord(userChoice)} equals to Computers ${convertToWord(computerChoice)}. It's a draw`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "lsp":
        case "spos":
        case "sl":
        case "lp":
        case "pspo":
        case "spor":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
        case "spol":
        case "sspo":
        case "ls":
        case "pl":
        case "spop":
        case "rspo":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spospo":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

    lizard_div.addEventListener('click', function () {
        game("l");
    })

    spock_div.addEventListener('click', function () {
        game("spo");
    })
}

main();