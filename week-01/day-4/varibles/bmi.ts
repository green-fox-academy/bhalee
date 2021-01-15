'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let heightInMOnSquare = heightInM * 2;
let bmi: number =  massInKg / heightInMOnSquare;
console.log(bmi.toFixed(1));