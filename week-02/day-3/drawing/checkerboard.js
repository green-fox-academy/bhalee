'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function square(x) {
  
   for (let i = 0, q= -300; i < 10; i++, q+=100){
    
  
  for (let i = 0, a = q, b = 0; i < 400 / x; i++, a += x, b += x) {
    ctx.fillStyle = 'black'
    ctx.fillRect(a, b, x, x);
    
   }
   
}

}
square(50);