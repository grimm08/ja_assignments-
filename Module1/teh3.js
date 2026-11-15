'use strict';
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));
let sum = num1 + num2 + num3;

let average = sum / 3;
document.getElementById("t3").innerText = "The sum is: " + sum + " and the average is: " + average;