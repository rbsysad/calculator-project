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

// Current operator
let currentOperator = '';

// Operator button handler
const operatorButtonHandler = (e) => {
    btnValue = e.target.textContent;
    displayValue = `${btnValue}`;
    updateDisplay(displayValue);
    currentOperator = displayValue;
};

// Clear button handler
const clearButtonHandler = () => {
    displayValue = '0';
    updateDisplay(displayValue);
};

// Add event listeners to buttons
const numberedButtons = document.querySelectorAll('.btn__number');
numberedButtons.forEach((currentButton) =>
    currentButton.addEventListener('click', numberedBtnHandler)
);

const operatorButtons = document.querySelectorAll('.btn__operator');
operatorButtons.forEach((currentButton) =>
    currentButton.addEventListener('click', operatorButtonHandler)
);

const clearButton = document.querySelector('.btn__clear');
clearButton.addEventListener('click', clearButtonHandler);

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
        case add:
            add(num1, num2);
            break;
        case subtract:
            subtract(num1, num2);
            break;
        case multiply:
            multiply(num1, num2);
            break;
        case divide:
            divide(num1, num2);
            break;
    }
};
