// Get users current year
// Capture users YOB
// Subtract current year fROM YOB
// Grab the html and return value as current age.

// create a date object first
const dates = new Date();
// create year
const years = date.getFullYear();
// create month
const months =  date.getMonth()+1;
// create day
const days = date.getDate();
const fullDate = `${months}/${days}/${years}`
// grab form field
const fom = document.querySelector('.forms');
// grab the id for date
const birthday = document.getElementById('birthday').value;

// get result display
const ageDisplay =  document.getElementById('ageDisplay');

// let us handle form submission

fom.addEventListener('submit', (event)=>{
    event.preventDefault(); // Prevents default form submission

    // grab birthday logics
    if(!birthday){
        ageDisplay.textContent = `Please enter a valid date? `
        return;
    }
    const birth = new Date(birthday);

    // calculate age
    let age = dates.getFullYear() - birth.getFullYear();
    const monthDifference =  dates.getMonth() -  birth.getMonth();

    // adjust for months
    if(
        monthDifference < 0 || (monthDifference ===0 && dates.getDate() < birthday.getDate())
         
    ){
        age--
    }
    // display the result
        ageDisplay.textContent = `You are ${age} years old.`

})
