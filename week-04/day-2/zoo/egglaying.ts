'use strict';
import{Animal} from './animal'
export abstract class EggLaying extends Animal{
public breed():string{
  return 'laying eggs'
}
}