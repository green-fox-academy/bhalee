// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


let theNumber: number = 9;
function sum(theNumber: number):number {
    let plusNumber: number = 0;
    for (let i:number = 0; i <= theNumber; i++) {
        plusNumber = i + plusNumber;
    }
    return plusNumber;
    }
console.log(sum(theNumber));
