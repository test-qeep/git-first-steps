'use strict';
const input = document.getElementById('num-input');
let num = 0;
let p = false;
let lop = null;

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

const numButtons = document.getElementsByClassName('num-button');
[].forEach.call(numButtons, (button) => {
    button.onclick = () => {
        enterNumber(button.textContent)
    }
});

const dotButton = document.getElementById('dot-button');
dotButton.onclick = () => {
    if (p) {
        num = parseFloat(input.value);
        input.value = '0.';
        p = false;
    }
    if (input.value.indexOf('.') === -1) {
        input.value += '.';
    }
};

const enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = n;
            p = false;
        } else {
            input.value = input.value + n;
        }
    }
};

const dispatchOperation = (operation) => {
    if (operation === '±') {
        input.value = parseFloat(input.value) * -1;
    }
    console.log(num, lop, p, operation);
    if (lop) {
        if (!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }

    p = true;
    if (operation !== '=') {
        lop = operation;
    } else {
        lop = null;
    }
};

const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '×':
            return argument1 * argument2;
        case '÷':
            return argument1 / argument2;
        case '=':
            return argument1;
    }
};

const operationButtons = document.getElementsByClassName('operation-button');
[].forEach.call(operationButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});

for (let i = 0; i < operationButtons.length; i++) {
    const button = operationButtons[i];

    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
}

document.getElementById('clear-all-button').onclick = () => {
    num = 0;
    p = false;
    lop = null;
    input.value = '0';
};

document.getElementById('clear-current-button').onclick = () => {
    input.value = '0';
};
