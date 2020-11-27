'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 0, x = 60, y = 30; i < 14; i++, x += 23, y += 23){
ctx.strokeStyle = 'green'
ctx.beginPath();
ctx.moveTo(10, x);
ctx.lineTo(y, 380);
ctx.stroke();
}
for (let i = 0, x = 340, y = 350; i < 14; i++, x -= 23, y -= 23){
ctx.strokeStyle = 'purple'
ctx.beginPath();
ctx.moveTo(370, x);
ctx.lineTo(y, 20);
ctx.stroke();
}