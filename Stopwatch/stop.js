// set the h1 color

const h1 = document.getElementById('color');
h1.style.color = 'brown';

// fetch the date and time module
const dates = new Date()
console.log(dates.getHours())

// grab the display result section
const results = document.getElementById('result');
results.textContent = dates


// grab the start buttons
const starts = document.getElementById('start');

// stop button
const stops = document.getElementById('stops');

// restart
const resets = document.getElementById('reset');

// assign each button an eventlistener\
// Use the date module in js
// you can opt for a function