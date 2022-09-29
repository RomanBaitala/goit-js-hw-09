const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
stopBtnRef.disabled = true;

startBtnRef.addEventListener('click', onButtonStart);
stopBtnRef.addEventListener('click', onButtonStop);

function onButtonStart(){
    const randomBg = setInterval(() => {
        bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    toggleActiveBtn(stopBtnRef, startBtnRef);
};

function onButtonStop(randomBg){
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