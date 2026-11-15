'use strict';
let  qu = confirm("Should I calculate the square root?");
if (qu) {
    let num = parseFloat(prompt("Enter a number:"));

        if (num < 0) {
            document.getElementById("t6").innerText = "The square root of a negative number is not defined.";
        } else {
            let sqrt = Math.sqrt(num);
            document.getElementById("t6").innerText = "The square root of " + num + " is: " + sqrt;
        }
    }
    else {
        document.getElementById("t6").innerText = "The square root is not calculated.";
    }