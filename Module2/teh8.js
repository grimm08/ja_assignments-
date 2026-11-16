'use strict';
const names = ["Jonny", "DeeDee", "joey", "Marky"];

function connect(connectnames) {
    let name = "";
    for (let i = 0; i < connectnames.length; i++) {
        name += connectnames[i];
    }
    return name;
}

const conection = connect(names);
document.getElementById("t8").innerText = conection;
