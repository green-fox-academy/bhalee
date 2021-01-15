export class Plants {
  protected _name: string;
  protected _waterAmount: number;
  protected _type: string;

  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
    this._waterAmount = 0;
  }
  public infoName(): string {
    return this._name;
  }
  public infoWaterAmount(): number {
    return this._waterAmount;
  }
  public infoType(): string {
    return this._type;
  }
  public addwater(amountOfWater: number) {
    return (this._waterAmount += amountOfWater);
  }
}
