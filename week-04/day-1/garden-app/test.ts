import { Garden } from './garden';
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