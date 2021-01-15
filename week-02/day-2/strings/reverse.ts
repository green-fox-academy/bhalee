'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(toBeReversed): string {
  let splitRevers = toBeReversed.split(``);
  splitRevers.reverse();
  let joinRevers = splitRevers.join(``);
  return joinRevers;
}
console.log(reverse(toBeReversed));

