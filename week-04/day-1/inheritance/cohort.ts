export class Cohort {
  protected _name:string;
  protected _students:string[]
  protected _mentors:string[]

  constructor(name:string){
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  addStudent(Student:string):void{
    this._students.push(Student);
  }

  addMentor(Mentor:string):void{
    this._mentors.push(Mentor)
  }
  info():void{
    console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`);
    
  }

}

