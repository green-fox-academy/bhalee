// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`
let swapName: string = ''
let names: string[] = ['Arthur', 'Boe', 'Chloe'];
swapName = names[0];
names[0] = names[2];
names[2] = swapName;
console.log (names);

