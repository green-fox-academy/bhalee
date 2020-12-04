'use strict';

class Animal {
  private _animal: string;
  private _hunger: number;
  private _thirst: number;

  constructor(animal: string) {
    this._animal = animal;
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat() {
    this._hunger--;
    console.log(`${this._animal} ate`);
    console.log('hunger level: '+cat._hunger);
    
  }
  public drink() {
    this._thirst--;
    console.log(`${this._animal} drank`);
    console.log('thirst level: '+cat._thirst);
  }
  public play() {
    this._hunger++;
    this._thirst++;
    console.log(`${this._animal} played`);
    if (this._hunger > 52 && this._thirst > 52){
      console.log(`Your ${this._animal} is very death!`)
    } else
    if (this._hunger > 52 ){
      console.log(`Your ${this._animal} is starved to death!`)
    } else
    if (this._thirst > 52 ){
      console.log(`Your ${this._animal} is died of thirst!`)
    }
    console.log('hunger level: '+cat._hunger+' thirst level: '+cat._thirst);
  }
}
let cat = new Animal('Cat');
cat.play();
cat.eat();
cat.play();
cat.drink();
cat.play();
cat.play();
