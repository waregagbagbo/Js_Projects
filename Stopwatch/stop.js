// set the h1 color
const h1 = document.getElementById('color');
h1.style.color = 'brown';

// grab the display result section
const results = document.getElementById('result');

// grab the start buttons
const starts = document.getElementById('start');
// stop button
const stops = document.getElementById('stops');
// restart
const resets = document.getElementById('reset');

// initialize time values
let startTimer = 0;
let elapsedTime = 0;
let timeInterval;

// function to startTimer
function startTime() {
    // set the date
    startTimer = Date.now() - elapsedTime;

    // set interval
    timeInterval = serInterval(() => {
        elapsedTime = Date.now() - startTime;
        results.textContent = formatTime(elapsedTime);

    }, 10);
    starts.disabled = true;
    stops.disabled = false;
}


// we will create function for time functions and tie each to an eventistener
// we will create function for time functions and tie each to an eventistener