// DOM declaration
const rocks = document.getElementById('rock');
const papers = document.getElementById('paper');
const scissor = document.getElementById('scissors');
const results = document.querySelector('.result');
const scores = document.querySelector('.score');
const reset = document.querySelector('.reset');

// Add the listeners for the buttons
rocks.addEventListener('click', function(){
 // console.log('rock')
  playRound('rock')
});

papers.addEventListener('click', function(){
  //console.log('paper')
  playRound('paper')
});

scissor.addEventListener('click', function(){
  //console.log('scissors')
  playRound('scissors')
});


// Global variables
  let humanScore = 0;
  let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice,computerChoice){
 
  // human choice logic
  const humanSelection = ()=>{
    return humanChoice;
  }

  // computer choice
  const computerSelection = () =>{
    let computerSelector = ['rock','paper','scissors'];
    let finalOutput  = Math.floor(Math.random() * computerSelector.length)
    return computerSelector[finalOutput]
  };  

  // set the human and computer choices functions to variables
  let humanTake = humanSelection();
  computerChoice = computerSelection();
  
  // apply conditions
  if(humanTake === computerChoice){
    return ("Equal")
  }
  else if(
    (humanTake === "rock" && computerChoice === "scissors") ||
    (humanTake === "scissors" && computerChoice === "paper") ||
    (humanTake === "paper" && computerChoice === "rock")
  ){
    humanScore += 1
    return ("You win! " + humanTake + " beats " + computerChoice)
  }
  else{
    computerScore +=1;
    return `You lose! ${computerChoice} beats ${humanTake}`
  }
}
playRound()