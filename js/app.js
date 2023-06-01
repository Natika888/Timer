let counterValue = 0;
let clickCounter = 0;
let counterInterval;

let buttons = document.querySelectorAll(".button");
let counter = document.querySelector(".counter");
// console.log(buttons);

buttons.forEach(btn => {
    btn.addEventListener('click', onBtnClick);
})

function onBtnClick(e) {
    if (e.target.classList.contains('start')) {
        onStartClick();
    }
    if (e.target.classList.contains('stop')) {
        stopCounter();
    }
    if (e.target.classList.contains('reset')) {
        stopCounter();
        counterValue = 0;
        counter.textContent = counterValue;
    }
}

function onStartClick(e) {
    if (clickCounter === 0) {
        startCounter();
    }
    
    clickCounter++;
    
}

function startCounter() {
    counterInterval = setInterval(incrementCounter, 1000);
  }

  function incrementCounter() {
    counterValue++;
    counter.textContent = counterValue;
  }

  function stopCounter() {
    clearInterval(counterInterval);
    clickCounter = 0;
  }