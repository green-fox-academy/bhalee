'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.
ctx.strokeStyle = 'green'
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 400);
ctx.stroke();

ctx.strokeStyle = 'red'
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(600, 200);
ctx.stroke();