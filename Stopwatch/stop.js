// set the h1 color
const h1 = document.getElementById('color');
h1.style.color = 'brown';

// grab the display result section
const resultTimer = document.getElementById('result');

// grab the start buttons
const starts = document.getElementById('start');
// stop button
const stops = document.getElementById('stop');
// restart
const resets = document.getElementById('reset');

// initialize time values
let startTimer = 0;
let elapsedTime = 0;
let timeInterval;

// set the function time format

function formatTime(elapsedTime) {
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds));
}

// function to startTimer
function startsTimer() {
    // set the date
    startTimer = Date.now() - elapsedTime;
    // set interval
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTimer;
        resultTimer.textContent = formatTime(elapsedTime);

    }, 10);
    starts.disabled = true;
    stops.disabled = false;
}


// function to stopTimer
function stopsTimer() {
    clearInterval(timeInterval)

    starts.disabled = true;
    stops.disabled = true;
}
// function to resetTimer
function resetTimer() {
    clearInterval(timeInterval);

    resetTimer.textContent = "00:00:00.0";
    elapsedTime = 0;

    starts.disabled = false;
    stops.disabled = true;
}

// append these to EventListeners
starts.addEventListener('click', startsTimer);
resets.addEventListener('click', resetTimer);
stops.addEventListener('click', stopsTimer);