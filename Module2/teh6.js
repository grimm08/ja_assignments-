'use strict';
function rand_dice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
let dice = rand_dice();
while (dice != 6) {
    document.getElementById("t6").innerHTML += "<li>" + dice + "</li>";
    dice = rand_dice();
}
document.getElementById("t6").innerHTML += "<li>" + dice + "</li>";
