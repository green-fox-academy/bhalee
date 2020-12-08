'use strict';
import { Printable } from './printable';
let dominoes: any[] = [];
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
  addDominoes(aSide: number, bSide: number) {
    dominoes.push(...[this._aSide, this._bSide]);
  }
  printAllFields(): void {
    console.log(`Domino A side: ${domino.aSide()}, B side: ${domino.bSide()}`);
  }
  printAll(){
    dominoes.forEach((dominoes)=>{
    console.log(`Domino A side: ${dominoes._aSide}, B side: ${dominoes._bSide}`);
    })
  }
}

let domino = new Domino(3, 2);
let domino2 = new Domino(4, 5);
dominoes.push(domino,domino2);

for (let domino of dominoes) {
  domino.printAllFields();
}
console.log('-----------------------------------');


domino.printAll();

  

