import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
<<<<<<< HEAD
=======
import { HttpService } from './http.service';
>>>>>>> master

@Injectable()
export class TodoStoreService {

  public todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
<<<<<<< HEAD

  constructor(private todoService: HttpService) {
    this.todoService.getTodos().subscribe((res: Todo[]) => {
      this.todos.next(res);
    });
=======
  constructor(private http: HttpService) {
    this.refresh();
  }
  
  refresh() {
    this.http.get().subscribe(
      (todos) => {
      this.todos.next(todos)
    }
  )
>>>>>>> master
  }

  add(title: string) {
    if (title) {
<<<<<<< HEAD
      const todos = this.todos.getValue();
      todos.push(new Todo(title));

      this.todos.next(todos);
=======
      const current = this.todos.getValue();
      // current.push(new Todo(title))
      // this.todos.next(current);
      this.http.post(new Todo(title)).subscribe((todos) => {
        this.todos.next(todos);
      })
>>>>>>> master
    }
  }
  
  delete(t: Todo) {
<<<<<<< HEAD

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
=======
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
>>>>>>> master
  }
}
