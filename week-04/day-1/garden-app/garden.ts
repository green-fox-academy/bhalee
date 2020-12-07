import { Flowers } from './flower';
import { Trees } from './tree';
class Garden {
  protected _gardenName: string;
  protected _gardenFlowers: Flowers[];
  protected _gardenTrees: Trees[];

  constructor(gardenName:string) {
    this._gardenName = gardenName;
    this._gardenFlowers = [];
    this._gardenTrees = [];
  }

  addFlower(flowerName: string): void {
    let flower: Flowers = new Flowers(flowerName);
    this._gardenFlowers.push(flower);
  }
  addTree(TreeName: string) {
    let tree: Trees = new Trees(TreeName);
    this._gardenTrees.push(tree);
  }
}
let almas = new Garden('alma kert');
console.log(almas);
almas.addFlower('yellow');
almas.addFlower('red');
console.log(almas);
