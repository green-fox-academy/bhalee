'use strict';

let lineCount: number = 7;
let star: any = '\*';
let space: any = ' ';

for (let i: number = 1, j: number = 3, k: number = -3, l: number = 7; i <= lineCount; i++, j--, k++, l--) {
if (j > 0){
    console.log ((space.repeat(j))+(star.repeat(i))+(star.repeat(i-1)));
} else 
{
    console.log ((space.repeat(k))+(star.repeat(l)+(star.repeat(l-1))));
}

}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is