'use strict';
let num = parseInt(prompt("Enter a number:"));
let factorial = 0;
for (let i = 1; i <= num; i++) {
    if (num %i == 0 ) {
        factorial += 1;
    }
}
if (factorial > 2) {
    document.getElementById("t9").innerText = num + " is not a prime number.";
}
else {
    document.getElementById("t9").innerText = num + " is a prime number.";
}