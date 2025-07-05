"use strict";
const inputField = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const continueBtn = document.getElementById("continue-btn");
const showTime = document.getElementById('display-time');
let itsON = true;
let timerId;
let timeInSeconds;
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
continueBtn.addEventListener('click', continueTimer);
function startTimer() {
    clearInterval(timerId);
    let minutes = Number(inputField.value);
    inputField.value = '';
    timeInSeconds = minutes * 60;
    updateTimer();
}
function updateTimer() {
    timerId = setInterval(() => {
        if (itsON && timeInSeconds >= 0) {
            let min = (String(Math.floor(timeInSeconds / 60))).padStart(2, "0");
            let secs = (String(timeInSeconds % 60)).padStart(2, "0");
            console.log('tá chegando aqui');
            showTime.innerText = `${min}:${secs}`;
            timeInSeconds--;
            console.log(timeInSeconds);
        }
        else {
            clearInterval(timerId);
        }
    }, 1000);
}
function stopTimer() {
    console.log('chamou a função, ao menos');
    if (itsON) {
        itsON = false;
        clearInterval(timerId);
    }
}
function continueTimer() {
    if (!itsON) {
        itsON = true;
        clearInterval(timerId);
        updateTimer();
    }
}
