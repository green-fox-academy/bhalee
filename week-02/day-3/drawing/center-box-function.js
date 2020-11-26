'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function square(x) {
  for (let i = 0, a = 300-(x/2), b = 200-(x/2); i < 3; i++, a += x, b += x) {
    if (i === 2) {
      a -= x * 3;
      b -= x * 3;
    }
    ctx.fillRect(a, b, x, x);
  }
}
square(50);
