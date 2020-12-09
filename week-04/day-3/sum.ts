'use strict';
export class Sum {
  sum(x?: any, y?: number): number {

    let isObject = typeof x;

    if (x === null || y === null) {
      return x + y;
      
    } else if (isObject === 'object') {
      let arraySum: number = 0;
      for (let i: number = 0; i < x.length; i++) {
        arraySum = arraySum + x[i];
      }
      return arraySum;

    } else {
      return x + y;
    }
  }
}
