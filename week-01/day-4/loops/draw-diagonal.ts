'use strict';
export{}

let lineCount: number = 6;

for ( let i:number = lineCount - 1; i < lineCount; i++){
    let star: string = '\%';
    for( let j:number = 0; j < lineCount; j++ ){

        star += '\%';

    }
    console.log (star);
}
for ( let i:number = lineCount - 2, space2: string = ''; i > 0; i--, space2 + ' '){
    let star: string = '\%';
    

    for( let j:number = lineCount - 0 ; j < lineCount; j++ ){

        space2 += '';


    }
    for( let j:number = lineCount ; j < lineCount; j++ ){

        star += '\%';

    }
    
    

        let space3: string = '';

    for (let j:number = lineCount - i; j > 0; j--) {
    space3 += ' ';
    

    }
    space2 += ' ';
    console.log (star+space2+star+space3+star);



// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is