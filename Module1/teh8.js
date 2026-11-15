'use strict';
let year1 = parseFloat(prompt("Enter the year:"));
let year2 = parseFloat(prompt("Enter the end year:"));

for (let year = year1; year <= year2; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("t8").innerHTML += "<li>" + year + "</li>";
    }
} 