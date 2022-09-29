import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]')
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
startBtnRef.disabled = true;
let currentTime = Date.now();
let intervalId = null;

stopBtnRef.addEventListener('click', () => {
    clearInterval(intervalId);
    daysRef.textContent = '00';
    hoursRef.textContent = '00';
    minutesRef.textContent = '00';
    secondsRef.textContent = '00';
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
});

startBtnRef.addEventListener('click', () => {
    intervalId = setInterval(timer, 1000);
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        currentTime = selectedDates[0];
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtnRef.disabled = false;
        }
    },
};

flatpickr(inputRef, options);

function timer(){
    const timerTime = currentTime - new Date();
    if (timerTime <= 0){
        clearInterval(intervalId)
        return
    };
    startBtnRef.disabled = true;
    const { days, hours, minutes, seconds } = convertMs(timerTime);
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
};

function addLeadingZero(value){
    return String(value).padStart(2, 0)
};