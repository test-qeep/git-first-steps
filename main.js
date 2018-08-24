'use strict';
const input = document.getElementById('num-input');
let waitingNumber = 0;
let priorityWaitingNumber = 0;
let currentOperation = null;
let inputtingNumber = false;

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

const enterNumber = (n) => {
    if (input.value === '0' || !inputtingNumber) {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
    inputtingNumber = true;
};

const numButtons = document.getElementsByClassName('num-button');
[].forEach.call(numButtons, (button) => {
    button.onclick = () => {
        enterNumber(button.textContent)
    }
});

const dotButton = document.getElementById('dot-button');
dotButton.onclick = () => {
    if (input.value.indexOf('.') === -1) {
        input.value += '.';
    }
};

const dispatchOperation = (operation) => {
    console.log(waitingNumber, currentOperation);
    const argumentNumber = parseFloat(input.value);
    inputtingNumber = false;

    if (!currentOperation) {
        waitingNumber = argumentNumber;
    } else {
        waitingNumber = processOperation(currentOperation, waitingNumber, argumentNumber);
    }

    input.value = waitingNumber;

    currentOperation = operation;
    console.log(waitingNumber, currentOperation);
};

const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '*':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;
    }
}

const operationButtons = document.getElementsByClassName('operation-button');
[].forEach.call(operationButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});

// DOM — Document Object Model
// BOM — Browser Object Model

