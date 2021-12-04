const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timeId = null;

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopChangeBgColor);
stylesBtn();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
    timeId = setInterval(() =>
        body.style.backgroundColor = getRandomHexColor(),
        1000);
    
    
        startBtn.setAttribute('disabled', 'true');
        stopBtn.removeAttribute('disabled');
}

function stopChangeBgColor() {
    clearInterval(timeId);

    stopBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');
}


function stylesBtn() {
    const start = startBtn.style;
    const stop = stopBtn.style;

    start.width = '75px';
    start.height = '50px';
    start.borderRadius = '15px';
    start.border = '1px solid';
    start.color = 'purple';

    stop.width = '75px';
    stop.height = '50px';
    stop.borderRadius = '15px';
    stop.border = '1px solid';
    stop.marginLeft = '20px';
    stop.color = 'purple';
    
}


