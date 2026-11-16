'use strict';
const numbers = [];
let nums = parseInt(prompt("give a number: "));
while (nums != 0) {
    numbers.push(nums);
    nums = parseInt(prompt("give a number: "));
}
numbers.sort((a, b) => a - b);

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}