import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo app';
  newTodoText: string;
  todos: Todo[] = [
    new Todo('Hello World'),
    new Todo('Bonjour Monde'),
    new Todo('Allez faire les courses'),
  ];

  addTodo(e) {
    const title = e.target.value;
    if (title) {
      this.todos.push(new Todo(title));
    }
  }

  onTodoDelete(t: Todo) {
    console.log('onTodoDelete', t);
    this.todos.splice(this.todos.indexOf(t), 1);
  }

  pendingTasks(tasks: Todo[]): number {
    return tasks.filter(t => !t.completed).length;
  }

  countCompleted(tasks: Todo[]): number {
    return tasks.filter(t => t.completed).length;
  }

  clearCompleted(tasks: Todo[]) {
    this.todos = this.todos.filter(t => !t.completed)
  }

  completeAll(tasks: Todo[]) {
    this.todos = tasks.map(t => {
      t.completed = true;
      return t;
    });
  }

  uncompleteAll(tasks: Todo[]) {
    this.todos = tasks.map(t => {
      t.completed = false;
      return t;
    });
  }
}
