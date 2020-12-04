// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class SharpieSet {
  private _color: string;
  private _width: number;
  private _inkAmount: number;
  private _usabale: boolean;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
    this._usabale = true;
  }
  public use() {
    if (this._inkAmount > 0) {
      this._inkAmount -= 50;
    } else {
      this.countUsable();
    }
  }
  public countUsable():boolean {
    console.log('you cannot use this');
    
    return (this._usabale = false);
  }
  public removeTrash() {
    
  }
}

let pen = new SharpieSet('black', 100);
pen.use()
pen.use()
pen.use()
console.log(pen);

