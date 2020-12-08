'use strict';
import {StringInstrument} from './stringedinstrument';
// import {Instrument} from './instrument'

export class ElectricGuitar extends StringInstrument {

  constructor (numberOfStrings?:number){
    super()
    this._numberOfStrings = numberOfStrings ?? 6;
    this._name = 'Eletric Guitar';
  }
  public sound(): string {
    return 'Twang'
  }
}
