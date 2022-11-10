const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decreaseBtn = document.querySelector("#decrease");
let counter = document.querySelector("#counter");

let count = 0;

counter.innerHTML = count;

function increase() {
  count++;
  counter.innerHTML = count;
}

function decrease() {
  count--;
  counter.innerHTML = count;
}

function reset() {
  count = 0;
  counter.innerHTML = count;
}

increaseBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
decreaseBtn.addEventListener("click", decrease);
