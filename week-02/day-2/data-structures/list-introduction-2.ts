let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = [...listA];

if (listA.includes('Durian')) {
  console.log('yes');
} else {
  console.log('nooope');
}
listB.splice(3, 1);

listA.splice(3, 0, 'Kiwifruit');

console.log(`listA = ${listA.length} listB = ${listB.length}`);
if (listA.length > listB.length) {
  console.log('listA is bigger');
} else {
  console.log('listB is bigger');
}

console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));
listB.push('Passion Fruit', 'Pomelo');
console.log(listA[3]);
