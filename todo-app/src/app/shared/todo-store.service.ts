import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoStoreService {

  public todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

  constructor(private todoService: HttpService) {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      this.todos.next(res);
    });
  }

  add(title: string) {
    if (title) {
      const todos = this.todos.getValue();
      todos.push(new Todo(title));

      this.todos.next(todos);
    }
  }
  
  delete(t: Todo) {

    const todos = this.todos.getValue();
    todos.splice(todos.indexOf(t), 1);
    
    
    this.todos.next(todos);
  }
  
  update(old: Todo, title: string) {

    const todos = this.todos.getValue();
    const i = todos.indexOf(old);
    todos[i] = new Todo(title)
    
    this.todos.next(todos);

  }

  clearCompleted() {
    
    let todos = this.todos.getValue();
    todos = todos.filter(t => !t.completed);

    this.todos.next(todos);
  }

  completeAll() {

    let todos = this.todos.getValue();
    
    todos = todos.map(t => {
      t.completed = true;
      return t;
    });
    
    
    this.todos.next(todos);
  }

  uncompleteAll() {
    let todos = this.todos.getValue();
    
    
    todos = todos.map(t => {
      t.completed = false;
      return t;
    });
    
    
    this.todos.next(todos);
  }
}
