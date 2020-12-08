'use strict';
import {Animal} from './animal'

export class Mammal extends Animal{
  constructor(name:string,age?:number,borned?:string, petable?:boolean){
    super(name,age, borned,petable)
    this._name = name;
    this._age = age;
    this._borned = borned;
    this._petAble = petable;
    
  }
  breed(): string{
    return 'pushing miniature versions out'
  }
  getName(): string {
    return this._name;
  }
  eat(): string {
    return 'I like eat seeds';
  }
}