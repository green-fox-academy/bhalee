export class Flowers{

  protected _name:string;
  protected _waterAmount:number;

  constructor (name:string){
    this._name = name;
    this._waterAmount = 0;
  }
  infoName ():string{
    return this._name
  }
  infoWaterAmount ():number{
    return this._waterAmount
  }
  addwater (amountOfWater:number){
    return this._waterAmount += amountOfWater;
  }
}


