const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
stopBtnRef.disabled = true;
let randomBg = null;

startBtnRef.addEventListener('click', onButtonStart);
stopBtnRef.addEventListener('click', onButtonStop);

function onButtonStart(){
    randomBg = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    toggleActiveBtn(stopBtnRef, startBtnRef);
};

function onButtonStop(){
    clearInterval(randomBg);
    toggleActiveBtn(startBtnRef, stopBtnRef);
};

function toggleActiveBtn(activeBtn, inactiveBtn) {
    inactiveBtn.disabled = true;
    activeBtn.disabled = false;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};