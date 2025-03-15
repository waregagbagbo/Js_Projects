// We will define our DOM parameter

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice,computerChoice){
 
  // human choice logic
  const humanSelection = ()=>{
    // make the humanchoice case insesitive
    let makeChoice = prompt('Start the game. Key in preferences of ("rock","paper","scissors")')
    return makeChoice.toLowerCase()
  };

  // computer choice
  const computerSelection = () =>{
    let computerChoice = ['rock','paper','scissors'];
    let finalOutput  = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[finalOutput]
  };  

  // set the human and computer choices functions to variables
  let humanChoice = humanSelection();
  let computerChoice = computerSelection();
  
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
// return multiple rounds
//for(let i=0; i < 5; i++){
  //console.log(playRound())
}
// return the final score
console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`)
if(humanScore > computerScore){
  console.log("You win the game!");

}


