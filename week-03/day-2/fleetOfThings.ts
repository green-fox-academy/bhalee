import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let milk = new Thing('Get milk');
let remove = new Thing('Remove the obstacles')
let stand = new Thing('Stand up')
let eat = new Thing('Eat lunch')

fleet.add(milk)
fleet.add(remove)
fleet.add(stand)
fleet.add(eat)
eat.complete()
stand.complete()




console.log(fleet.toString());