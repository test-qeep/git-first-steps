const input = document.getElementById('num-input');
const backspaceButton = document.getElementById('backspace-button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

const num1 = document.getElementById('num1');

num1.onclick = () => {
    enterNumber(1);
};

// const num2 = document.getElementById('num2');
//
// num2.onclick = () => {
//     enterNumber(2);
// };
//
// const num3 = document.getElementById('num3');
//
// num3.onclick = () => {
//     enterNumber(3);
// };
//
// const num4 = document.getElementById('num4');
//
// num4.onclick = () => {
//     enterNumber(1);
// };


// DOM — Document Object Model
// BOM — Browser Object Model

