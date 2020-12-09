import { anagram } from './anagram';
import * as test from 'tape';

let alma: string = 'Alma';
let amla: string = 'aMla';
let notAnagram = 'notAnagram';
let arrayAlma = ['apple', 'alMa'];
let arrayAlmaAnagram = ['aLma', 'amla'];

test('give back true with strings', (t) => {
  t.equal(anagram(alma, amla), true);
  t.end();
});

test('give back false with a string', (t) => {
  t.equal(anagram(alma), false);
  t.end();
});

test('give back false with strings', (t) => {
  t.equal(anagram(alma, notAnagram), false);
  t.end();
});

test('give back true with array and string', (t) => {
  t.equal(anagram(arrayAlma, amla), true);
  t.end();
});

test('give back true with array and string', (t) => {
  t.equal(anagram(arrayAlma, alma), false);
  t.end();
});

test('give back true with a array', (t) => {
  t.equal(anagram(arrayAlmaAnagram), true);
  t.end();
});

test('give back false with a array', (t) => {
  t.equal(anagram(arrayAlma), false);
  t.end();
});

test('give back false withot value', (t) => {
  t.equal(anagram(), false);
  t.end();
});

test('give back true with arrays', (t) => {
  t.equal(anagram(arrayAlmaAnagram, arrayAlma), true);
  t.end();
});

test('give back false with arrays', (t) => {
  t.equal(anagram(arrayAlma, arrayAlma), false);
  t.end();
});
