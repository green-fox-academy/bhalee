import { Sum } from './sum';
import * as test from 'tape';

let sum = new Sum();

test('2 numbers sum', (t) => {
  t.equal(sum.sum(3, 4), 7);
  t.end();
});

test('null and a number sum', (t) => {
  t.equal(sum.sum(null, 7), 7);
  t.end();
});

test('nulls sum', (t) => {
  t.equal(sum.sum(null, null), 0);
  t.end();
});

test('2 numbers sum with array', (t) => {
  let numbersForSum1: number[] = [1, 2];
  t.equal(sum.sum(numbersForSum1), 3);
  t.end();
});

test('1 number sum with array', (t) => {
  let numbersForSum1: number[] = [2];
  t.equal(sum.sum(numbersForSum1), 2);
  t.end();
});

test('multiply sum with array', (t) => {
  let numbersForSum1: number[] = [1,2,3,4];
  t.equal(sum.sum(numbersForSum1), 10);
  t.end();
});