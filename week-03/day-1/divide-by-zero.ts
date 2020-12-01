'use strict';
export{}
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideNumber(x: number) {
  let sum: number | string = x / 10;
  if (sum === 0) {
    sum = 'fail';
  }
  return sum;
}
console.log(divideNumber(0));
