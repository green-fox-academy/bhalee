'use strict';
import { EggLaying } from './egglaying';
import {Flyable} from '../flyable/flyable'

export class Bird extends EggLaying implements Flyable {
  constructor(name: string, age?: number, borned?: string, petable?: boolean) {
    super(name, age, borned, petable);
    this._name = name;
    this._age = age;
    this._borned = borned;
    this._petAble = petable;
  }
  land(): string {
    return 'I can land quick and precisely';
  }
  fly(): string {
    return 'I can fly like a hawk';
  }
  takeoff(): string {
    return 'I can takeoff quick and precisely';
  }
  getName(): string {
    return this._name;
  }
  eat(): string {
    return 'I like eat seeds';
  }
  
}
