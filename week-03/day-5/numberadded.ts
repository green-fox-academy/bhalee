'use strict';
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
function numberAdded(n: number) {
  if (n > 100) {
    return n;
  }
  
  n += 1;
  return numberAdded(n);
}

console.log(numberAdded(3));
