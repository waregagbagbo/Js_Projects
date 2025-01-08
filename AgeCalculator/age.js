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