'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function square(x,c) {
  let color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  color.unshift(c);
  let p = x;
  for (let i = 0, a = 300-(p/2), b = 200-(p/2); i < 8; i++, a += (p / 8)/2, b += (p / 8)/2, p -= p / 8) {
    ctx.strokeStyle = color[i]
    ctx.strokeRect(a, b, p, p);
  }
}
square(200,'black');