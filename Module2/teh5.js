'use strict';
const numbers = [];
let nums = parseInt(prompt("give a number: "));
while (!numbers.includes(nums)) {
    numbers.push(nums);
    nums = parseInt(prompt("give a number: "));
}
numbers.sort((a, b) => a - b);

for (let i = 0 ; i < numbers.length; i++) {
    console.log(numbers[i]);
}