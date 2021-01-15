'use strick';
import { Printable } from './printable';
let todos: any[] = [];
export class Todo implements Printable {

  protected _task: string;
  protected _priority: string;
  protected _done: boolean;

  constructor(task: string, priority: string) {
    this._task = task;
    this._priority = priority;
    this._done = false;
  }
  
  taskDone() {
    this._done = true;
  }
  printAllFields(): void {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._done}`);
  }
}

let buylist = new Todo('Buy milk', 'high');
todos.push(buylist);
buylist.taskDone();

for (let todo of todos) {
  todo.printAllFields();
}
