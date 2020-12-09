'use strict';
import { Printable } from './printable';
let dominoes: any[] = [];
let domino: Domino
export class Domino implements Printable {

  protected _aSide: number;
  protected _bSide: number;

  constructor(aSide: number, bSide: number) {
    this._aSide = aSide;
    this._bSide = bSide;
  }

  aSide(): number {
    return this._aSide;
  }
  bSide(): number {
    return this._bSide;
  }
  printAllFields(): void {
    console.log(`Domino A side: ${this.aSide()}, B side: ${this.bSide()}`);
    
  }
}

domino = new Domino(3, 2);
dominoes.push(domino);
domino = new Domino(4, 5);
dominoes.push(domino);

for (let domino of dominoes) {
  domino.printAllFields();
}