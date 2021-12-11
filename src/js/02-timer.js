import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]'),
}

const currentTime = Date.now();
let startTime;



refs.startBtn.setAttribute('disabled', 'true');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        startTime = selectedDates[0].getTime();
        console.log(startTime);
        console.log(currentTime);
        
        if (startTime < currentTime) {
            window.alert('Please choose a date in the future');
        }
        
        if (startTime > currentTime) {
            refs.startBtn.removeAttribute('disabled');
        }
    }
}

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

function timer() {

    setInterval(() => {
        const nowTime = Date.now();
        const difference = startTime - nowTime;
        const { days, hours, minutes, seconds } = convertMs(difference);
        updateTime({ days, hours, minutes, seconds });
    }, 1000);

}
    
function updateTime({days, hours, minutes, seconds}) {
        refs.daysEl.textContent = addLeadingZero(days);
        refs.hoursEl.textContent = addLeadingZero(hours);
        refs.minutesEl.textContent = addLeadingZero(minutes);
        refs.secondsEl.textContent = addLeadingZero(seconds);

}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


refs.startBtn.addEventListener('click', timer)