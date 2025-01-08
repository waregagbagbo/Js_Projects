// Get users current year
// Capture users YOB
// Subtract current year fROM YOB
// Grab the html and return value as current age.

// create a date object first
const date = new Date();
// create year
const years = date.getFullYear();
// create month
const months =  date.getMonth()+1;
// create day
const days = date.getDate();
const fullDate = `${months}/${days}/${years}`
console.log(fullDate)
// grab form field
const fom = document.querySelector('.forms');
// grab the id for date
const birthday = document.getElementById('birthday');

// get result display
const ageDisplay =  document.getElementById('ageDisplay');


fom.addEventListener('click', ()=>{
})
