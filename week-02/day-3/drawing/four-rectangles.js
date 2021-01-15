'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
let rectanglesPosition = 20;
let rectanglesSize = 20;
let color = ['red', 'green', 'blue', 'brown'];

for (let i = 0, s = 0, p = 0; i < 4; i++, s += 20, p += p + 30) {
  ctx.strokeStyle = color[i];
  ctx.strokeRect(
    rectanglesPosition + p,
    rectanglesPosition + p,
    rectanglesSize + s,
    rectanglesSize + 20 + s
  );
}
