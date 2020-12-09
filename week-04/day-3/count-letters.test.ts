import { countLetters } from './count-letters';
import * as test from 'tape';

test('count in lowercase', (t) => {
  let text: string = 'RaDdnoMm';
  t.deepEqual(countLetters(text), { r: 1, a: 1, d: 2, n: 1, o: 1, m: 2 });
  t.end();
});

test('count only letters', (t) => {
  let text: string = 'a2   *( $As+';
  t.deepEqual(countLetters(text), { a: 2, s: 1 });
  t.end();
});

test('if text is empty', (t) => {
  let text: string = '';
  t.deepEqual(countLetters(text), {});
  t.end();
});

test('hungarian letters', (t) => {
  let text: string = 'íöóŐ';
  t.deepEqual(countLetters(text), { í: 1, ö: 1, ó: 1, ő: 1 });
  t.end();
});
