import { Person } from './person';

class Student extends Person {
  protected _previousOrganizatio: string;
  protected _skippedDays: number;

  constructor(
    name?: string,
    age?: number,
    gender?: string,
    previousOrganizatio?: string
  ) {
    super(name, age, gender);
    this._previousOrganizatio = previousOrganizatio ?? 'The School of Life';
    this._skippedDays = 0;
  }

  public getGoal(): void {
    console.log(`My goal is: Be a junior software developer.`);
  }

  public introduce(): void {
    console.log(
      `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganizatio} who skipped ${this._skippedDays} days from the course already.`
    );
  }

  skipDays(numberOfDays: number): void {
    console.log((this._skippedDays += numberOfDays));
  }
}
