// Get users current year
// Capture users YOB
// Subtract current year fROM YOB
// Grab the html and return value as current age.

// create a date object first
const dates = new Date();

// create day
const days = dates.getDate();

// grab form field
const fom = document.getElementById('form');

// get result display
const ageDisplay =  document.getElementById('ageDisplay');

// movie display
const movie = document.getElementById('movies')

// let us handle form submission
fom.addEventListener('submit', (event)=>{
    event.preventDefault(); // Prevents default form submission

    // grab birthday logics grab the id for date
const birthdayValue = document.getElementById('birthday').value;
    if(!birthdayValue){
        ageDisplay.textContent = `Please enter a valid date? `
        return;
    }
    const birth = new Date(birthdayValue);

    // calculate age
    let age = dates.getFullYear() - birth.getFullYear();
    const monthDifference =  dates.getMonth()+1 -  birth.getMonth()+1;

    // adjust for months
    if(
        monthDifference < 0 || (monthDifference ===0 && dates.getDate() < birthday.getDate())
         
    ){
        age--
    }
    // display the result
        ageDisplay.textContent = `You are ${age} years old.`
        if( age >= 18){
            movie.textContent = 'Additionally,you are allowed to take alcohol and enjoy swimming'
            
        }
        else{
            movie.textContent =' Meaning you are still undergage'
        }   

        

})
