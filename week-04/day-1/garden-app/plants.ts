export class Plants {
  protected _name: string;
  protected _waterAmount: number;
  protected _type: string;

  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
    this._waterAmount = 0;
  }
  infoName(): string {
    return this._name;
  }
  infoWaterAmount(): number {
    return this._waterAmount;
  }
  infoType(): string {
    return this._type;
  }
  addwater(amountOfWater: number) {
    return (this._waterAmount += amountOfWater);
  }
}
