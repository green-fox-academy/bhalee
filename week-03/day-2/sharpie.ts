export class Sharpie{
  private _color:string;
  private _width:number;
  private _inkAmount: number;

  constructor(color:string, width:number){
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }
  
  public use(){
    this._inkAmount--;
  }
}

let sword = new Sharpie('silver', 100)
sword.use()
console.log(sword);