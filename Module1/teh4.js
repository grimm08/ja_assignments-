'use strict';
const Gryffindor = 1;
const Slytherin = 2 ;
const Hufflepuff = 3 ;
const Ravenclaw = 4;
let student = prompt("whats your name? ");
let choice = Math.floor((Math.random() * 4) + 1);
if (choice ==1) {
    document.getElementById("t4").innerHTML = `${student} you are Gryffindor`;
}
else if (choice == 2){
    document.getElementById("t4").innerHTML = `${student} you are Slytherin`;
}
else if (choice == 3) {
    document.getElementById("t4").innerHTML = `${student} you are Hufflepuff`;
}
else {
    document.getElementById("t4").innerHTML = `${student} you are Ravenclaw`;
}