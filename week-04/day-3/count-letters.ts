export function countLetters(text: string): object {
  let objectForLetters = {};
  let justLetters: string = 'qwertzuiopőúasdfghjkléáűíyxcvbnmöüó';
  let letter: string;

  function getKeyByValue(object, value) {
    return Object.keys(object).find((object) => object === value);
  }

  if (text === undefined || '') {
    return objectForLetters;
    
  } else {
    for (let i: number = 0; i < text.length; i++) {
      letter = text.charAt(i).toLowerCase();
      if (justLetters.indexOf(letter) === -1) {
        // next letter
      } else if (getKeyByValue(objectForLetters, letter) === letter) {
        objectForLetters[letter]++;
      } else {
        objectForLetters[letter] = 1;
      }
    }
    return objectForLetters;
  }
}
