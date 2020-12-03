// Create a Station and a Car classes
// Station
// gasAmount -> available gas amount of the gas station
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount -> gas amount of the car
// capacity -> capacity of the fuel tank
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Car {
  _carName: string;
  _gasAmount: number;
  _capacity: number;
  constructor(carname: string) {
    this._carName = carname;
    this._gasAmount = 0;
    this._capacity = 100;
  }
  public get gasAmount(): number {
    return this._gasAmount;
  }
}

class Station {
  _stationName: string;
  _gasAmount: number;
  constructor(stationName: string, gasAmount: number) {
    this._stationName = stationName;
    this._gasAmount = gasAmount;
  }
  public get gasAmount(): number {
    return this._gasAmount;
  }
  public refill(car: Car) {
    this._gasAmount -= car._capacity - car._gasAmount;
    car._gasAmount += car._capacity - car._gasAmount;
  }
}
let lada = new Car('Lada');
console.log(lada.gasAmount);
let omv = new Station('OMV', 3000);
omv.refill(lada);
console.log(lada.gasAmount);
console.log(omv.gasAmount);
