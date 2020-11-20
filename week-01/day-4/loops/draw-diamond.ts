'use strict';
export{}
let lineCount: number = 41; // minimum: 7 and odd number looks like more diamond :)
let star: any = '\*';
let space: any = ' ';

for (let i: number = 1, j: number = lineCount - 4, k: number = - 3, l: number = lineCount; i <= lineCount; i++, j--, k++, l--) {
if (i < lineCount / 2){
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