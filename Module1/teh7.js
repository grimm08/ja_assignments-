'use strict';
let rounds = parseInt(prompt("How many number of dice rolls ?"));
let total = 0;

for (let i = 1; i <= rounds; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("t7_1").innerText += "Roll " + i + ": " + roll + "\n";
    total += roll;
}
document.getElementById("t7").innerText = "Total: " + total;