'use strict';
import { Instrument } from './instrument';

export abstract class StringInstrument extends Instrument {
  public _numberOfStrings: number;
  public abstract sound(): void;
  public play(customStrings?: number): void {
    console.log(`${this._name}, a ${customStrings || this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
