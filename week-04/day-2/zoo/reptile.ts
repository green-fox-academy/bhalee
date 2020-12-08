'use strict';
import { EggLaying } from './egglaying';

export class Reptile extends EggLaying {
  constructor(name: string, age?: number, borned?: string, petable?: boolean) {
    super(name, age, borned, petable);
    this._name = name;
    this._age = age;
    this._borned = borned;
    this._petAble = petable;
  }
  getName(): string {
    return this._name;
  }
  eat(): string {
    return 'I like eat meaty foods';
  }
}
