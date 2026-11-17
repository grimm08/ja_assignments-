'use strict';
const imga = document.getElementById(`target`);
const imgb = document.getElementById(`trigger`);

imgb.addEventListener(`mouseover`, () => {
    imga.src= `img/picB.jpg`;
});

imgb.addEventListener(`mouseout`, () => {
    imga.src= `img/picA.jpg`;
});