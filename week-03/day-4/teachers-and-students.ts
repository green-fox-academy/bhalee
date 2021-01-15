// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method
class Student {
  _studentName: string;

  constructor(student: string) {
    this._studentName = student;
  }
  public learn(): void {
    console.log(`${this._studentName} is learning something new`);
  }
  public question(teacher: Teacher): void {
    console.log('the student ask a question from ' + teacher._teacherName);
    teacher.answer();
  }
}

class Teacher {
  _teacherName: string;
  constructor(teacherName: string) {
    this._teacherName = teacherName;
  }
  public teach(student: Student): void {
    console.log('Teacher is teach and');
    student.learn();
  }
  public answer(): void {
    console.log(`teacher is answering a question`);
  }
}

let pistike = new Student('Pistike');
let marikaneni = new Teacher('Marika neni');
pistike.learn();
console.log(`------------------------------------`);
pistike.question(marikaneni);
console.log(`------------------------------------`);
marikaneni.teach(pistike);
console.log(`------------------------------------`);
marikaneni.answer();
