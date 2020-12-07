import { Plants } from './plants';
class Garden {
  protected _gardenName: string;
  protected _gardenPlants: Plants[];

  constructor(gardenName: string) {
    this._gardenName = gardenName;
    this._gardenPlants = [];
  }

  addPlant(plantName: string, plantType): void {
    this._gardenPlants.push(...[new Plants(plantName, plantType)]);
  }

  info() {
    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      if (this._gardenPlants[i].infoWaterAmount() < 5) {
        console.log(`The ${this._gardenPlants[i].infoName()} ${this._gardenPlants[i].infoType()} needs water`);
      } else {
        console.log(`The ${this._gardenPlants[i].infoName()} ${this._gardenPlants[i].infoType()} doesnt need water`);
      }
    }
  }
  watering(waterAmount: number) {
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
//Test
let myLittleGarden = new Garden('Little Garden');
myLittleGarden.addPlant('yellow', 'Flower');
myLittleGarden.addPlant('blue', 'Flower');
myLittleGarden.addPlant('orange', 'Tree');
myLittleGarden.addPlant('purple', 'Tree');
myLittleGarden.info();
myLittleGarden.watering(40);
myLittleGarden.info();
myLittleGarden.watering(70);
myLittleGarden.info();
