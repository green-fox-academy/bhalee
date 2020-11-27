'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0, x = 10, y = 300; i < 14; i++, x += 14, y -= 14) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(300, x);
  ctx.lineTo(y, 200);
  ctx.stroke();
}
for (let i = 0, x = 24, y = 314; i < 13; i++, x += 14, y += 14) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(300, x);
  ctx.lineTo(y, 200);
  ctx.stroke();
}
for (let i = 0, x = 300, y = 390; i < 14; i++, x += 14, y -= 14){
ctx.strokeStyle = 'green'
ctx.beginPath();
ctx.moveTo(x, 200);
ctx.lineTo(300, y);
ctx.stroke();
}
for (let i = 0, x = 286, y = 376; i < 13; i++, x -= 14, y -= 14){
  ctx.strokeStyle = 'green'
  ctx.beginPath();
  ctx.moveTo(x, 200);
  ctx.lineTo(300, y);
  ctx.stroke();
  }
