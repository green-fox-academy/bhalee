'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dots1 = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];
let dots2 = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];
// console.log(dots1[0][0])
// console.log(dots1[0][1])

function draw1(x, y) {
  let alma = dots1;
  for (let q= 0, i = 0; q < 2 ; q++){
    
    
  for (let i = 0; i < alma.length; i++) {
    x = alma[i][0];
    y = alma[i][1];
  }

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < alma.length; i++) {
    x = alma[i][0];
    y = alma[i][1];

    ctx.lineTo(x, y);
    console.log(x);
    console.log(y);
  }
  ctx.stroke();
  alma = dots2;
}

}

 draw1();

