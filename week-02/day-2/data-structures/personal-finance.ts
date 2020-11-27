let expenses: number[] = [500, 1000, 1250, 175, 800, 120];
let allSpends: number = 0;
expenses.forEach(function (elem: number) {
  allSpends = elem + allSpends;
  return allSpends;
});
console.log('Greatest expense: ' + allSpends);

let smallestSpend: number = allSpends;
expenses.forEach(function (elem: number) {
  if (elem < smallestSpend) {
    smallestSpend = elem;
  }
  return smallestSpend;
});
console.log('Cheapest spending: ' + smallestSpend);

let avargeSpend: number = 0;
expenses.forEach(function (elem: number) {
  avargeSpend = allSpends / expenses.length;
  return avargeSpend;
});
console.log('average amount of our spendings: ' + avargeSpend.toFixed(2));
