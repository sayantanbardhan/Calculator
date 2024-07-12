let displayValue = '0';
let memory = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

function recall() {
    displayValue = memory || '0';
    updateDisplay();
}

function inputDigit(digit) {
    if (displayValue === '0') {
        displayValue = digit.toString();
    } else {
        displayValue += digit.toString();
    }
    updateDisplay();
}

function inputDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function operate(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function sqrt() {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
    updateDisplay();
}

function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}
