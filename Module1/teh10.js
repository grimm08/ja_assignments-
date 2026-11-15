'use strict';
const dices = parseInt(prompt("How many dices do you want to roll?"));
const goal = parseInt(prompt("what is the target number?"));

let num = 0;
let  total_sides = dices * 6;
const repeats = 10000;
for (let i = 1; i <= repeats; i++) {
    let sum = 0;
    for (let j = 1; j <= dices; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
        if (sum == goal) {
            num++;
        }  
    }
    
const probability = (num / repeats) * 100;
document.getElementById("t10").innerText = "The probability to get sum " + goal + " with " + dices + " dices is: " + probability.toFixed(2) + "%";