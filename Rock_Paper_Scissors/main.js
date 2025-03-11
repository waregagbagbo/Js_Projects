// declare global variable of players
// initialize the values if they will hold numerical values later unless otherwise
let humanScore = 0;
let computerScore = 0;

// create a  function and set the global vars as args in the function
function playRound(humanChoice,computerChoice){
 
  // computer choice logic
  const humanSelection = ()=>{
    // make the humanchoice case insesitive
    let choice = humanChoice.toLowerCase();
    choice = prompt('Start the game. Key in preferences of ("rock","paper","scissors")')
    return humanSelection
  };

  // computer choice
  const computerSelection = () =>{
    let computerChoice = ['rock','paper','scissors'];
    let final  = Math.floor(Math.random() * computerChoice.length)
    return computerSelection[final]
  };  
  
  // apply conditions
  if(humanSelection === computerSelection){
    return ("Equal")
  }
  else if(humanSelection > computerSelection){
    humanScore += 1
    return ("Rock beats paper")
  }
  else if(computerSelection > humanSelection){
    computerScore = computerScore + 1
    return ("Scissors beats paper")    
  }
  else{
    return ("You lose! paper beats rock")
  }
}
console.log(playRound(humanSelection, computerSelection))
