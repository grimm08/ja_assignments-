'use strict';
const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const firstName = document.querySelector('input[name=firstname]').value;
  const lastName = document.querySelector('input[name=lastname]').value;

  target.innerHTML = `Your name is ${firstName} ${lastName}`;
});