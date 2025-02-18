let display = document.getElementById('display').value;

function clearDisplay() {
    display = ''
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
        display = 'Error'
        updateDisplay();
    }

}

function appendToDisplay(value) {
    display += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = display;
}