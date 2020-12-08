'use strict';
export abstract class Instrument {
  public _name: string;

  public abstract play(): void;
}
