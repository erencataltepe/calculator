let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let toBeCleaned = false;
const displayArea = document.getElementById("display-area");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equalSign = document.getElementById("equal");
const clearButton = document.getElementById("clear");

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
  switch(operator) {
    case "add":
      return add(a, b);
      break;
    case "subtract":
      return subtract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
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

function clearAllValues() {
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  clearDisplay();
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {    
    if (toBeCleaned) {
      clearDisplay();
    }
    displayValue(e.target.textContent);
    toBeCleaned = false;
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    setOperator(e.target.id);
    setOperand(getDisplayValue());
    toBeCleaned = true;
  })
})

equalSign.addEventListener("click", () => {
  console.log(firstOperand);
  console.log(secondOperand);
  console.log(currentOperator);
  console.log(toBeCleaned);
  if (firstOperand && currentOperator && !toBeCleaned && !secondOperand) {
    setOperand(getDisplayValue());
    let result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
    console.log(result);
    clearDisplay();
    displayValue(result);
  }
})


clearButton.addEventListener('click', () => {
  clearAllValues();
})