'use strict';
export{}
let lineCount: number = 4;
let star:string = '*'

for (let i:number = 1, j:number = lineCount - i; i <= lineCount; i++, j-- ){

        let space: string = '';

for (let j:number = lineCount - i; j > 0; j--) {
    space += ' ';
    
}

console.log(space+star);
star += '**';

}


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
/*
'use strict';
export{}
let lineCount: number = 4;
let star: any = '\*';
let space: any = ' ';

for (let i: number = 1, j: number = lineCount + 1; i <= lineCount; i++, j--) {

    console.log ((space.repeat(j))+(star.repeat(i))+(star.repeat(i-1)));

} 
*/