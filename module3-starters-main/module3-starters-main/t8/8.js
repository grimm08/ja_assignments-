'use strict';
const number1 = document.querySelector(`#num1`);
const number2 = document.querySelector(`#num2`);
const operate = document.querySelector(`#operation`);
const start = document.querySelector(`#start`);
const result = document.querySelector(`#result`);

start.addEventListener(`click`, function(){
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const operation = operate.value;
    let vasta;
  
    if (operation == `add`){
        vasta = num1 + num2;
    }
    else if (operation == `sub`){
        vasta = num1 - num2;
    }
    else if (operation == `multi`){
        vasta = num1 * num2;
    }
    else if (operation == `div`){
        if (num2 == 0){
            result.innerHTML = `error, cannot divide by 0`;
            return
        }
        vasta = num1 / num2;
    }

    else if (isNaN(num1) || isNaN(num2)){
        result.innerHTML = `enter a number`;
        return;
    }
    result.innerHTML =`vastaus: ` + vasta;
})