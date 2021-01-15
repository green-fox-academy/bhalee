'use strict';
import {StringInstrument} from './stringedinstrument';

export class Violin extends StringInstrument {

  constructor (numberOfStrings?:number){
    super()
    this._numberOfStrings = numberOfStrings ?? 4;
    this._name = 'Violin';
  }
  public sound(): string {
    return 'Screech';
  }
}