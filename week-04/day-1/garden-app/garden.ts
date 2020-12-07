import { Plants } from './plants';
class Garden {
  protected _gardenName: string;
  protected _gardenPlants: Plants[];

  constructor(gardenName: string) {
    this._gardenName = gardenName;
    this._gardenPlants = [];
  }

  addPlant(plantName: string, plantType): void {
    this._gardenPlants.push(...[new Plants(plantName,plantType)]);
  }

  info() {
    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      console.log(this._gardenPlants[i].infoName());
      console.log(this._gardenPlants[i].infoWaterAmount());
    }
  }
  watering(waterAmount: number) {
    let needWater: number = 0;

    for (let i: number = 0; i < this._gardenPlants.length; i++) {

      if (this._gardenPlants[i].infoWaterAmount() < 5) {
        needWater++;
      }
    }

    for (let i: number = 0; i < this._gardenPlants.length; i++) {
      if (this._gardenPlants[i].infoWaterAmount() < 5|| this._gardenPlants[i].infoType() === 'tree') {
        this._gardenPlants[i].addwater((waterAmount / needWater)*0.40 );
      }
      if (this._gardenPlants[i].infoWaterAmount() < 5|| this._gardenPlants[i].infoType() === 'flower') {
        this._gardenPlants[i].addwater((waterAmount / needWater)*0.75 );
      }
    }
  }
}

let kiskert = new Garden('kiskert');
kiskert.addPlant('yellow','tree');
kiskert.addPlant('blue','flower');
kiskert.watering(40);
kiskert.info();
