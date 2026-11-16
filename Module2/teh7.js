'use strict';
function rand_dice(sides) {
    let dice = Math.floor(Math.random() * sides) + 1;
    return dice;
}
let num = parseInt(prompt("Enter a number between 1 and 20:"));
let dice = rand_dice(num);
while (dice != num) {
    document.getElementById("t7").innerHTML += "<li>" + dice + "</li>";
    dice = rand_dice(num);
}
document.getElementById("t7").innerHTML += "<li>" + dice + "</li>";
