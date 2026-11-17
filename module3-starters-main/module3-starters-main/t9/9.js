'use strict';
const button = document.querySelector(`#start`);
const input = document.querySelector(`#calculation`);
const result = document.querySelector(`#result`);

button.addEventListener(`click`, function(){
    const text = input.value.replace(/\s/g, ``);
    let answer;

    if (text.includes(`+`)){
        const parts = text.split(`+`);
        answer = parseFloat(parts[0])+ parseFloat(parts[1]);
    }
    else if (text.includes(`-`)){
        const parts = text.split(`-`);
        answer = parseFloat(parts[0]) - parseFloat(parts[1]);
    }
    else if (text.includes(`*`)){
        const parts = text.split(`*`);
        answer = parseFloat(parts[0]) * parseFloat(parts[1]);
    }
    else if (text.includes(`/`)){
        const parts = text.split(`/`);
        if (parts[1] == 0){
            result.innerHTML = `cannot divide by 0`;
            return;
        }
        answer = parseFloat(parts[0]) / parseFloat(parts[1]);
    }
    else {
        result.innerHTML =`error`;
    }
    if (isNaN(answer)){
        result.innerHTML = `error`;
    }
    else {
        result.innerHTML =`Answer: ${answer}`;
    }
});