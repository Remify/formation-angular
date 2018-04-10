import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoStoreService {

  public todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  constructor(private http: HttpService) {
    this.refresh();
  }
  
  refresh() {
    this.http.get().subscribe(
      (todos) => {
      this.todos.next(todos)
    }
  )
  }

  add(title: string) {
    if (title) {
      const current = this.todos.getValue();
      // current.push(new Todo(title))
      // this.todos.next(current);
      this.http.post(new Todo(title)).subscribe((todos) => {
        this.todos.next(todos);
      })
    }
  }
  
  delete(t: Todo) {
    const current = this.todos.getValue();
   this.http.delete(t.id).subscribe(() => {
    this.refresh();
   })
    // this.todos.next(current);
  }
  
  update(old: Todo, title: string) {
    const current = this.todos.getValue();
    const i = current.indexOf(old);
    current[i] = new Todo(title)
    this.todos.next(current);
  }

  clearCompleted() {
    let current = this.todos.getValue();
    current = current.filter(t => !t.completed);
    this.todos.next(current);
  }

  completeAll() {
    let current = this.todos.getValue();

    current = current.map(t => {
      t.completed = true;
      return t;
    });

    this.todos.next(current);
  }

  uncompleteAll() {
    let current = this.todos.getValue();
    current = current.map(t => {
      t.completed = false;
      return t;
    });

    this.todos.next(current);
  }
}
