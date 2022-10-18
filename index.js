// State
let operator;
let num1;
let num2;

// Update display function
const updateDisplay = (displayValue) => {
  displayText.textContent = displayValue;
};

// Initial display value
const displayText = document.querySelector('#display-div');
let displayValue = '0';
updateDisplay(displayValue);

// Numbered button handler
const numberedBtnHandler = (e) => {
  btnValue = e.target.textContent;
  if (
    displayValue === '0' ||
    displayValue === '*' ||
    displayValue === '/' ||
    displayValue === '-' ||
    displayValue === '+'
  ) {
    displayValue = `${btnValue}`;
  } else {
    displayValue = `${displayValue}${btnValue}`;
  }
  updateDisplay(displayValue);
};

// Operator button handler
const operatorButtonHandler = (e) => {
  num1 = +displayValue;
  operator = btnValue = e.target.textContent;
  displayValue = `${btnValue}`;
  updateDisplay(displayValue);
};

// Clear button handler
const clearButtonHandler = () => {
  displayValue = '0';
  updateDisplay(displayValue);
};

// Equals button handler
const equalsButtonHandler = () => {
  num2 = +displayValue;
  const result = operate(operator, num1, num2);
  displayValue = result;
  updateDisplay(displayValue);
  operator = '';
  num1 = '';
  num2 = '';
};

// Add event listeners to buttons
const numberedButtons = document.querySelectorAll('.btn__number');
numberedButtons.forEach((currentButton) =>
  currentButton.addEventListener('click', numberedBtnHandler)
);

// Numbers
const operatorButtons = document.querySelectorAll('.btn__operator');
operatorButtons.forEach((currentButton) =>
  currentButton.addEventListener('click', operatorButtonHandler)
);

// Clear
const clearButton = document.querySelector('.btn__clear');
clearButton.addEventListener('click', clearButtonHandler);

// Equals
const equalsButton = document.querySelector('.btn__equals');
equalsButton.addEventListener('click', equalsButtonHandler);

// Math functions
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
};
