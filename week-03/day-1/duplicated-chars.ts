'use strict';
export {};
// Create a method that decrypts duplicated-chars.txt
const fs = require('fs');
function fileName(x): void {
  try {
    let fileContent: string = fs.readFileSync(x, 'utf-8').toString();
    let fileLetters = fileContent.split('');

    for (let i: number = 0; i < fileLetters.length; i++) {
      if (fileLetters[i] === fileLetters[i + 1]) {
        delete fileLetters[i];
      }
    }

    let decryptsText = fileLetters.join('');
    fs.writeFileSync('duplicated-chars-fixed.txt', decryptsText);

    console.log(decryptsText);
  } catch {
    let zero: number = 0;
    return console.log(zero);
  }
}
fileName('duplicated-chars.txt');