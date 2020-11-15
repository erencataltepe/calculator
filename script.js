function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  return operator(a,b);
}

function displayValue(value) {
  const displayArea = document.getElementById("display-area");
  displayArea.textContent = value;
  return value;
}

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    displayValue(e.target.textContent);
  })
})