'use strict';
import {StringInstrument} from './stringedinstrument';

export class ElectricGuitar extends StringInstrument {

  constructor (numberOfStrings?:number){
    super()
    this._numberOfStrings = numberOfStrings ?? 4;
    this._name = 'Bass Guitar';
  }
  public sound(): string {
    return 'Duum-duum-duum';
  }
}