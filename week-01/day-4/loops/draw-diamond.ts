'use strict';
export{}
let lineCount: number = 7;
let star:string = '*'
let star2: string = '*'


for (let i:number = 1, j:number = lineCount - i; i <= lineCount / 2; i++, j-- ){

        let space: string = '';

for (let j:number = lineCount - i; j > 0; j--) {
    space += ' ';
    
}

console.log(space+star);
star += '**';

}

for (let q:number = 1, l:number = lineCount - q; q <= lineCount / 2 ; l--,q++ ){

    let space2: string = ' ';

for (let p:number = lineCount - q, m:number = lineCount - p; m >= 0; p--, m-- ) {
space2 += ' ';


}
for (let p:number = lineCount / 2 - q; p >= 0; p--) {
    space2 += '**';
    
}


console.log(space2+star2);


}
for (let z:number = 1; z < 2 ; z++){

    let space2: string = '';
    

    for (let z:number = 1; z < lineCount ; z++){

    space2 += ' ';

    }
    console.log(space2+star2);
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
/*
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

} */