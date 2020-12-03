import { Domino } from './domino';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// dominoes.forEach(function (elem, index) {
//   console.log(index);
//   console.log(elem.values[0]);

// });
let sortDominoes: Domino[] = [];

sortDominoes.push(dominoes[0]);
for (let p = 0, k = 0; p < dominoes.length / 2; p++) {
  for (let i: number = 0, j: number = 0; i < dominoes.length-1; i++) {
    if (dominoes[i + 1].values[j] === sortDominoes[k].values[j + 1]) {
      sortDominoes.push(dominoes[i + 1]);
      k++;
    }
  }
}

dominoes = sortDominoes;

print(dominoes);
