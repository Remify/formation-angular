import { TodoStoreService } from './../../shared/todo-store.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];

  constructor(private store: TodoStoreService) {
     this.store.todos.subscribe(todos => {
      this.todos = todos;
    })
  }

  
  addTodo(e) {
    const title: string = e.target.value;
    this.store.add(title);
  }

  onTodoDelete(t: Todo) {
    console.log(t)
    this.store.delete(t);
  }

  pendingTasks(tasks: Todo[]): number {
    return tasks.filter(t => !t.completed).length;
  }

  countCompleted(tasks: Todo[]): number {
    return tasks.filter(t => t.completed).length;
  }

  clearCompleted(tasks: Todo[]) {
    this.store.clearCompleted();
  }

  completeAll() {
    this.store.completeAll();
  }

  uncompleteAll(tasks: Todo[]) {
    this.store.uncompleteAll();
  }

}
