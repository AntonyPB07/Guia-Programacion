let display = '';

function appendToDisplay(value) {
    display += value;
    updateDisplay();
}

function clearDisplay() {
    display = '';
    updateDisplay();
}

function eraseNumber() {
    display = display.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        display = eval(display);
        updateDisplay();
    } catch (error) {
        display = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.querySelector('.display').value = display;
}
