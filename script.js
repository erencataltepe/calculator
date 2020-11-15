let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
const displayArea = document.getElementById("display-area");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");

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
  displayArea.textContent = displayArea.textContent + value;
}

function getDisplayValue() {
  return displayArea.textContent;
}

function setOperator(operator) {
  currentOperator = operator;
}

function setOperand(value) {
  if (firstOperand == null) {
    firstOperand = value;
  } else {
    secondOperand = value;
  }
}

function clearDisplay() {
  displayArea.textContent = "";
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {    
    displayValue(e.target.textContent);
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    setOperator(e.target.id);
    setOperand(getDisplayValue());
    console.log(firstOperand);
  })
})
