'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function square(x) {
  let p = x;
  for (let i = 0, a = 0, b = 0; i < 6; i++, a += p, b += p,p+=15) {
    ctx.fillStyle = 'purple'
    ctx.fillRect(a, b, p, p);
    ctx.strokeStyle = 'black'
    ctx.strokeRect(a, b, p, p);
  }
}
square(20);