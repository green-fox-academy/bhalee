'use strict';
export {};

let names: string[] = [];

console.log(names.length);

names.push('William');

if (names.length >= 1) {
  console.log(`${names.length} name(s) in the list`);
} else {
  console.log(`the list is empty`);
}
names.push('John');
names.push('Amanda');

console.log(`${names.length} name(s) in the list`);
console.log(names[2]);
console.log(names.join('\r\n'));

for (let i:number = 0, j:number = 1; i < names.length; i++, j++){
console.log(`${j}. ${names[i]} `);
}
names = names.filter(item => item !== names[1]);

names = [...names.reverse()]
console.log( names.join('\r\n') );

names = [];
console.log(names);




