'use strict';
const lines = ["First item", "Second item", "Third item"];
for (let i = 0; i< lines.length; i++){
    const li = document.createElement("li");
    li.textContent =lines[i];

    if (i == 1) {
        li.classList.add("my-item");
    }
    document.getElementById("target").appendChild(li);
}