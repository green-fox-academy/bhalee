'use strict';
export {};
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');
function fileName(x: string): void {
  try {
    let fileContent:string = fs.readFileSync(x, 'utf-8').toString();
    let numberOfLines:number = fileContent.split('\r\n').length;
    console.log(numberOfLines);
  } catch {
    let zero: number = 0;
    return console.log(zero);
  }
}
fileName('count-lines.txt');
