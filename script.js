// script.js

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let stopped = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('start-stop-button');
const resetButton = document.getElementById('reset-button');

startStopButton.addEventListener('click', function() {
    if (!running) {
        startStopButton.textContent = 'Pause';
        if (stopped) {
            startTime = new Date().getTime() - difference;
            stopped = false;
        } else {
            startTime = new Date().getTime();
        }
        tInterval = setInterval(getShowTime, 1);
        running = true;
    } else {
        startStopButton.textContent = 'Start';
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        stopped = true;
        running = false;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(tInterval);
    display.textContent = '00:00:00';
    running = false;
    stopped = false;
    startStopButton.textContent = 'Start';
});

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);
    
    display.textContent = 
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds;
}
