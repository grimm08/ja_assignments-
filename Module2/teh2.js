'use strict';
const nimit = [];
let num = parseInt(prompt("How many participants are there?"));
for (let i = 1; i <= num; i++) {
    let nimi = prompt("Enter the name of participant " + i + ":");
    nimit.push(nimi);
}
nimit.sort();
for (let i = 0; i < nimit.length; i++) {
    document.getElementById("t2").innerHTML += "<li>" + nimit[i] + "</li>";
}