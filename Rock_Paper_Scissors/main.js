// DOM declaration
const rocks = document.getElementById('rock');
const papers = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const results = document.querySelector('.results');
const scores = document.querySelector('.score');
const resets = document.getElementById('resetting');

rocks.addEventListener('click', function(){
    results.innerHTML = playRound('rock',computerScore)
    scores.textContent = `You: ${humanScore} Computer: ${computerScore}`;
}
)
papers.addEventListener('click', function(){
    results.innerHTML = playRound('paper',computerScore) 
    scores.innerHTML = `You: ${humanScore} Computer: ${computerScore}`
}
)

scissor.addEventListener('click', function(){
    results.innerHTML = playRound('scissors',computerScore)
    scores.innerHTML = `You: ${humanScore} Computer: ${computerScore}`
}
)
resets.addEventListener('reset', function(){
    humanScore = 0;
    computerScore = 0;
    if(humanScore === 5 || computerScore === 5){
        results.innerHTML = "Game Over!"
    }

    //results.innerHTML = "Let's play again!";
    //scores.innerHTML = `You: ${humanScore} Computer: ${computerScore}`
}
);


// Global variables
let humanScore = 0;
let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice,computerChoice){
 
  // human choice logic
  const humanSelection = ()=> {
    if(humanChoice === 'rock'){
        return 'rock'
    }else if(humanChoice === 'paper'){
        return 'paper'
    }else if(humanChoice === 'scissors'){
        return 'scissors'
    }else{
        return "error"
    }
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
  if(humanChoice === computerChoice){
    return ("Equal")
  }
  else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ){
    humanScore += 1
    return ("You win! " + humanChoice + " beats " + computerChoice)
  }
  else{
    computerScore +=1;
    return `You lose! ${computerChoice} beats ${humanChoice}`
  }
}
