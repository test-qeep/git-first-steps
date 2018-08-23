'use strict';
const input = document.getElementById('num-input');
const backspaceButton = document.getElementById('backspace-button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

const enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

const numButtons = document.getElementsByClassName('num-button');
[].forEach.call(numButtons, (button) => { button.onclick = () => { enterNumber(button.textContent)}});

const dotButton = document.getElementById('dot-button');
dotButton.onclick = () => {
    if (input.value.indexOf('.') === -1) {
        input.value += '.';
    }
}

// DOM — Document Object Model
// BOM — Browser Object Model

