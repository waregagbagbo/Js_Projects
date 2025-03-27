// DOM declaration
const rocks = document.getElementById('rock');
const papers = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const results = document.querySelector('.result');
const scores = document.querySelector('.score');
const reset = document.querySelector('.reset');

// Add the listeners for the buttons
rocks.addEventListener('click', function() {
    // console.log('rock')
    playRound('rock')
});

papers.addEventListener('click', function() {
    //console.log('paper')
    playRound('paper')
});

scissor.addEventListener('click', function() {
    //console.log('scissors')
    playRound('scissors')
});


// Global variables
let humanScore = 0;
let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice, computerChoice) {

    // human choice
    function humanSelection(choice) {
        document.getElementById('results').innerText += choice;
        return choice

    }

    // computer choice
    function computerSelection() {
        let choices = ['rock', 'paper', 'scissors']
        let finalOutput = Math.floor(Math.random() * choices.length);
        return choices[finalOutput]
    }

    // set the human and computer choices functions to variables
    humanChoice = humanSelection();
    computerChoice = computerSelection();

    // apply conditions
    if (humanChoice === computerChoice) {
        return ("Equal")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore += 1
        return ("You win! " + humanChoice + " beats " + computerChoice)
    } else {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
};