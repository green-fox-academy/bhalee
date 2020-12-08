'use strict';
export abstract class Animal {
  constructor(name, age, borned, petable) {
    this._name = name;
    this._age = age;
    this._borned = borned;
    this._petAble = petable;
  }
  protected _name: string;
  protected _age: number;
  protected _borned: string;
  protected _petAble: boolean;
  abstract getName(): string;
  abstract breed(): string;
  abstract eat(): string;
}
