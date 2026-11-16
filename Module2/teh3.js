'use strict';
const dogs = [];
for (let i = 0; i < 5; i++) {
    let dog = prompt("Enter the name of dog " + (i + 1) + ":");
    dogs.push(dog);
}
dogs.sort();
for (let i = 5 - 1; i >= 0; i--) {
    document.getElementById("t3").innerHTML += "<li>" + dogs[i] + "</li>";
}