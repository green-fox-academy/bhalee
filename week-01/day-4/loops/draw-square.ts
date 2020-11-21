'use strict';
let lineCount: number = 6;

for ( let i:number = lineCount - 1; i < lineCount; i++){
    let star: string = '\%';
    for( let j:number = 0; j < lineCount; j++ ){

        star += '\%';

    }
    console.log (star);
}
for ( let i:number = lineCount - 2; i > 0; i--){
    let star: string = '\%';
    let space: string = ' ';
    for( let j:number = lineCount ; j < lineCount; j++ ){

        star += '\%';

    }
    for( let j:number = 2 ; j < lineCount; j++ ){

        space += ' ';

    }
    console.log (star+space+star);
}
let star: string = '\%';
for( let j:number = 0; j < lineCount; j++ ){

    star += '\%';

}
console.log (star);


// let lineCount: number = 6;
// let star: any = '\%';
// let space: any = ' ';
// for (let i:number = 1; i <= lineCount; i++) {
// if ( i === 1 || i === 6 ){
//     console.log (star.repeat(6));
// }
// else if
// (i > 1 && i < 6) {
//     console.log (star+(space.repeat(4))+star);
// }
// }

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