import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class TodoStoreService {

  public todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  constructor(private http: HttpService) {
    this.refresh();
  }

  refresh() {
    this.http.get().subscribe((todos) => {
      this.todos.next(todos)
    })
  }

  add(title: string) {
    if (title) {
      const current = this.todos.getValue();
      // current.push(new Todo(title))
      // this.todos.next(current);
      this.http.put(new Todo(title)).subscribe((todos) => {
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
    const t = current[current.indexOf(old)];
    t.title = title;

    this.http.post(t).subscribe((list) => {
      this.todos.next(list);
    })

  }

  clearCompleted() {
    let current = this.todos.getValue();
    const toDelete = current.filter(t => t.completed);

    forkJoin(toDelete.map(t => this.http.delete(t.id))).subscribe(() => {
      this.refresh();
    })
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
