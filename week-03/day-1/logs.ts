'use strict';
export {};
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
const fs = require('fs');
function fileName(x:string): string[] {
  try {
    let fileContent: string = fs.readFileSync(x, 'utf-8').toString();
    let decryptsText:string[] = fileContent.split('   ');
    let ipNumbers: string[] = [];
    for (let i: number = 0; i < decryptsText.length; i++) {
      ipNumbers.push(decryptsText[(i += 1)]);
    }
    return ipNumbers;
  } catch {
    let zero: number = 0;
    console.log(zero);
  }
}
console.log(fileName('log.txt'));

// IN PROGRESS
// function fileName2(x): void {
//   try {
//     let fileContent: string = fs.readFileSync(x, 'utf-8').toString();
//     let decryptsText:string[] = fileContent.split(' /\r\n');
//     let alma:string[] = [];
//     for (let i = 0; i < decryptsText.length; i++){

//       alma.push(decryptsText[i].slice(1, 3))
//     }
//     console.log(alma);
    
//     // let ipNumbers: string[] = [];
//     // charCodeAt()

    
//   } catch {
//     let zero: number = 0;
//     console.log(zero);
//   }
// }
// console.log(fileName2('log.txt'));
