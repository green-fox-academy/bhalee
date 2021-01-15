import { Plants } from './plants';
export class Garden {
  protected _gardenName: string;
  protected _gardenPlants: Plants[];

  constructor(gardenName: string) {
    this._gardenName = gardenName;
    this._gardenPlants = [];
  }

  public addPlant(plantName: string, plantType:string): void {
    this._gardenPlants.push(...[new Plants(plantName, plantType)]);
  }

  public info():void {
    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      if (this._gardenPlants[i].infoWaterAmount() < 5) {
        console.log(`The ${this._gardenPlants[i].infoName()} ${this._gardenPlants[i].infoType()} needs water`);
      } else {
        console.log(`The ${this._gardenPlants[i].infoName()} ${this._gardenPlants[i].infoType()} doesnt need water`);
      }
    }
  }
  public watering(waterAmount: number):void {
    console.log(`Watering with ${waterAmount}`);
    let needWater: number = 0;
    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      if (this._gardenPlants[i].infoWaterAmount() < 5) {
        needWater++;
      }
    }

    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      if (this._gardenPlants[i].infoWaterAmount() < 5 && this._gardenPlants[i].infoType() === 'Tree') {
        this._gardenPlants[i].addwater((waterAmount / needWater) * 0.4);
      }

      if (this._gardenPlants[i].infoWaterAmount() < 5 && this._gardenPlants[i].infoType() === 'Flower') {
        this._gardenPlants[i].addwater((waterAmount / needWater) * 0.75);
      }
    }
  }
}