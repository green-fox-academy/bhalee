'use strict';
export {};
// -  Create a function called `factorio`
//    that returns it's input's factorial

let theNumber: number = 100;
function factorialize(theNumber) {
  if (theNumber < 2) return 1;
  return (theNumber *= factorialize(theNumber - 1));
}
console.log(factorialize(theNumber));
