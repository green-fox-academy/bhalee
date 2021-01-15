'use strict';
import {Vehicle} from './vehicle'
import {Flyable} from './flyable'

class Helicopter extends Vehicle implements Flyable{
  constructor(name:string, color:string, weight:number){
    super()
    this._name = name;
    this._color = color;
    this._weight = weight;
  }
  public land():string{
    return 'I can land vertically';
  }
  public fly():string{
    return 'I believe I can fly'
  }
  public takeoff():string{
    return 'I can takeoff vertically'
  }
}
let apache = new Helicopter('Apache', 'Black', 1900)
console.log(apache.fly());
console.log(apache.land());
console.log(apache.takeoff());


