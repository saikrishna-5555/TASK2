let minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval;
let running = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('laps-list');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

function startTimer() {
    if (!running) {
        running = true;
        timerInterval = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timerInterval);
}

function resetTimer() {
    running = false;
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = padZero(minutes);
    secondsDisplay.textContent = padZero(seconds);
    millisecondsDisplay.textContent = padZero(milliseconds);
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}

function recordLap() {
    const lapTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}
