'use strict';

export class Counter {
  private _number: number;
  private _startNumber: number;

  constructor(number?: number) {
    if (number === undefined) {
      this._number = 0;
      this._startNumber = 0;
    } else {
      this._number = number;
      this._startNumber = number;
    }
  }

  public add(number?: number) {
    if (number) {
      this._number += number;
    } else {
      this._number++;
    }
  }

  public get() {
    let stringNumber: number = this._number;
    return stringNumber;
  }

  public reset() {
    this._number = this._startNumber;
  }
}

// let szam = new Counter(100);
// console.log(szam);
// szam.add(5);
// szam.get;
// console.log(szam.get())
// szam.reset();
// szam.add();
// console.log(szam.get())

