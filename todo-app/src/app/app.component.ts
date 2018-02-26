import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo app';
  todos: Todo[] = [
    new Todo('Hello World'),
    new Todo('Bonjour Monde'),
    new Todo('Allez faire les courses'),
  ];

}
