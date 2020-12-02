// Create a method that decrypts reversed-order.txt
'use strict'
export {};
const fs = require('fs');
function fileName(x): void {
  try {
    let fileContent: string = fs.readFileSync(x, 'utf-8').toString();
    let decryptsText = fileContent.split('\n\r').reverse().join('');

    fs.writeFileSync('reversed-order-fixed.txt', decryptsText);
    console.log(decryptsText);
  } catch {
    let zero: number = 0;
    return console.log(zero);
  }
}
fileName('reversed-order.txt');