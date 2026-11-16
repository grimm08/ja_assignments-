'use strict';
const evenNumbers = [];
function even(numbers) {
    for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 500) + 1);
}
const evenNums = even(randomNumbers);
document.getElementById("t9_1").innerText = "Your numbers: " + randomNumbers.join(", ");
document.getElementById("t9").innerText = "Even numbers: " + evenNums.join(", ");

