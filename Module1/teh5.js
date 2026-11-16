'use strict';
let year = prompt("Enter the year: ");
if ((year % 4 ==0 && year% 100 != 0) || year % 400 ==0) {
    document.getElementById("t5").innerHTML = `year ${year} is leap year`
}
else{
    document.getElementById("t5").innerHTML = `year ${year} is not leap year`
}