'use strict';
export {};
// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
function fileName(x): void {
  try {
    let fileContent: string = fs.readFileSync(x, 'utf-8').toString();
    let decryptsText = fileContent.split('').reverse().join('').split('\r').reverse().join('');

    fs.writeFileSync('reversed-lines-fixed.txt', decryptsText);
    console.log(decryptsText);
  } catch {
    let zero: number = 0;
    return console.log(zero);
  }
}
fileName('reversed-lines.txt');
