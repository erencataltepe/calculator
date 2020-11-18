let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let toBeCleaned = false;
let result = null;
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
  if (currentOperator == null) {
    currentOperator = operator;
  } else if (firstOperand && secondOperand) {
    result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
    clearDisplay();
    displayValue(result);
    firstOperand = result;
    secondOperand = null;
    currentOperator = operator;
  }

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

function generateResult() {
  if (firstOperand && currentOperator && !toBeCleaned && !secondOperand) {
    setOperand(getDisplayValue());
    return operate(Number(firstOperand), Number(secondOperand), currentOperator);
  } else {
    return false;
  }
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
    setOperand(getDisplayValue());
    setOperator(e.target.id);
    toBeCleaned = true;
  })
})

equalSign.addEventListener("click", () => {
  result = generateResult();
  clearDisplay();
  if (result) {
    displayValue(result);
  }
})


clearButton.addEventListener('click', () => {
  clearAllValues();
})