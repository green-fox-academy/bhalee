'use strict';
import {StringInstrument} from './stringedinstrument';

export class ElectricGuitar extends StringInstrument {

  constructor (numberOfStrings?:number){
    super()
    this._numberOfStrings = numberOfStrings ?? 4;
    this._name = 'Violin';
  }
  public sound(): string {
    return 'Screech';
  }
}