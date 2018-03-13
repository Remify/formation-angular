import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoStoreService {

  public todos: Todo[] = [];
  constructor() { }

  add(title: string) {
    if (title) {
      this.todos.push(new Todo(title));
    }
  }
  
  delete(t: Todo) {
    this.todos.splice(this.todos.indexOf(t), 1);
  }
  
  update(old: Todo, title: string) {
    const i = this.todos.indexOf(old);
    this.todos[i] = new Todo(title)
  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed)
  }

  completeAll(t) {
    this.todos = this.todos.map(t => {
      t.completed = true;
      return t;
    });
  }

  uncompleteAll() {
    this.todos = this.todos.map(t => {
      t.completed = false;
      return t;
    });
  }
}
