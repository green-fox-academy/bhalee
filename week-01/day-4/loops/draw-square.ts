'use strict';

let lineCount: number = 6;
let star: any = '\%';
let space: any = ' ';
for (let i:number = 1; i <= lineCount; i++) {
if ( i === 1 || i === 6 ){
    console.log (star.repeat(6));
}
else if
(i > 1 && i < 6) {
    console.log (star+(space.repeat(4))+star);
}
}

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is