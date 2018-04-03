import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<any> {
    return this.http.get('http://localhost:3000/api/todos')
  }
  
  putTodo(t: Todo) {

  }

  postTodo(t: Todo) {

  }

  deleteTodo(id: number) {
    
  }


}
