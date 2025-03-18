// define our global variables
let humanScore = 0;
let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice){

  // computer choice
  let computerChoice = computerPlay();
  // function to get computer choice
  function computerPlay(){
    let computerSelection = ['rock','paper','scissors'];
    let finalOutput  = Math.floor(Math.random() * computerSelection.length)
    return computerSelection[finalOutput]
  };  
  
  // apply conditions for choices
  if(humanChoice === computerChoice){
    return ("It is a tie!")
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


//DOM Maninpulation, for the selections
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
//const humanScore = document.querySelector('.humanScore');
//const computerScore = document.querySelector('.computerScore');

// function to display Result
function displayResult(message){
  result.textContent = message;
  score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`
}

rock.addEventListener('click',()=>{
  console.log("Rock button clicked!");
  displayResult(playRound('rock'));
})
paper.addEventListener('click',()=>{
  displayResult(playRound('paper'))
 
})
scissors.addEventListener('click',()=>{
  displayResult(playRound('scissors'));
})
