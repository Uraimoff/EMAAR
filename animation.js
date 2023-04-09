const counter = document.querySelector(".counter");
const count = document.querySelector(".count");

const targetValue = 80; // Change this to your desired target value
const duration = 5000; // Change this to the duration of the animation in milliseconds
const interval = 50; // Change this to the interval between updates in milliseconds
const restartDelay = 7000; // Change this to the delay before restarting the counter in milliseconds

let startValue = 0;
let increment = targetValue / (duration / interval);
let currentValue = startValue;
let intervalId;

function updateCount() {
  currentValue += increment;
  count.textContent = Math.floor(currentValue);

  if (currentValue >= targetValue) {
    clearInterval(intervalId);
    setTimeout(() => {
      startCounter();
    }, restartDelay);
  }
}

function startCounter() {
  startValue = currentValue;
  currentValue = startValue;
  increment = (targetValue - startValue) / (duration / interval);
  intervalId = setInterval(updateCount, interval);
}

function checkVisibility() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;
  const offsetTop = counter.offsetTop;

  if (scrollY + windowHeight > offsetTop + 50) {
    startCounter();
    window.removeEventListener("scroll", checkVisibility);
  }
}

function startInterval() {
  setInterval(() => {
    checkVisibility();
  }, 5000);
}

startInterval();






// const counter = document.querySelector(".counter");
// const count = document.querySelector(".count");

// const targetValue = 100; // Change this to your desired target value
// const duration = 5000; // Change this to the duration of the animation in milliseconds
// const interval = 50; // Change this to the interval between updates in milliseconds

// let startValue = 0;
// let increment = targetValue / (duration / interval);
// let currentValue = startValue;
// let intervalId;

// function updateCount() {
//   currentValue += increment;
//   count.textContent = Math.floor(currentValue);

//   if (currentValue >= targetValue) {
//     clearInterval(intervalId);
//   }
// }

// setTimeout(() => {
//   intervalId = setInterval(updateCount, interval);
// }, duration * 3);

// const counter = document.querySelector(".counter");
// const count = document.querySelector(".count");

// const targetValue = 100; // Change this to your desired target value
// const duration = 5000; // Change this to the duration of the animation in milliseconds
// const interval = 50; // Change this to the interval between updates in milliseconds

// let startValue = 0;
// let increment = targetValue / (duration / interval);
// let currentValue = startValue;
// let intervalId;

// function updateCount() {
//   currentValue += increment;
//   count.textContent = Math.floor(currentValue);

//   if (currentValue >= targetValue) {
//     clearInterval(intervalId);
//   }
// }

// function startCounter() {
//   intervalId = setInterval(updateCount, interval);
// }

// function checkVisibility() {
//   const windowHeight = window.innerHeight;
//   const scrollY = window.scrollY || window.pageYOffset;
//   const offsetTop = counter.offsetTop;

//   if (scrollY + windowHeight > offsetTop + 50) {
//     startCounter();
//     window.removeEventListener("scroll", checkVisibility);
//   }
// }

// window.addEventListener("scroll", checkVisibility);

// /* check if the counter is already visible on page load */
// checkVisibility();