import { Todo } from './../../models/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  isEditing: boolean = false;
  @Input() task: Todo;
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.onDelete.emit(this.task);
  }

  setToEditable(inputText) {
    this.isEditing = true;
  }

  onBlur() {
    this.isEditing = false;
  }

}
