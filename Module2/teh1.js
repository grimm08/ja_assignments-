'use strict';
const numbers = [];
for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));
    numbers.push(num);
}
for (let i = 4 ; i >= 0; i--) {
    document.getElementById("t1").innerText += numbers[i] + "\n";
}
