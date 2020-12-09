'use strict';

export function anagram(string1?: any, string2?: any): boolean {
  let isObject = typeof string1;
  let isObject2 = typeof string2;

  if (isObject2 === 'object' && isObject === 'object') {
    let isHave: boolean = false;
    let string1Value: string;

    for (let i: number = 0; i < string1.length; i++) {
      string1Value = string1[i].toString().toLowerCase().split('').reverse().join('');
      for (let j: number = 0; j < string2.length; j++) {
        if (string1Value === string2[j].toString().toLowerCase().split('').join('')) {
          isHave = true;
        }
      }
    }
    return isHave;
  } else if (string1 === undefined || (isObject === 'string' && string2 === undefined)) {
    return false;
  } else if (isObject === 'object' && isObject2 === 'string') {
    let isHave: boolean = false;
    for (let i: number = 0; i < string1.length; i++) {
      if (string1[i].toString().toLowerCase().split('').reverse().join('') === string2.toString().toLowerCase()) {
        isHave = true;
      }
    }
    return isHave;
  } else if (isObject === 'object' && string2 === undefined) {
    if (string1.length < 2) {
      return false;
    } else {
      for (let i: number = 0; i < string1.length; i++) {
        if (string1[i].toString().toLowerCase().split('').reverse().join('') === string1[i + 1].toString().toLowerCase()) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else if (string1.toString().toLowerCase().split('').reverse().join('') === string2.toString().toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
