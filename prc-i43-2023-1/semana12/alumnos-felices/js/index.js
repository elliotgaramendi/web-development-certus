'use strict';

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
});