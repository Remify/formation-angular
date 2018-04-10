<<<<<<< HEAD
import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';
>>>>>>> master

@Injectable()
export class HttpService {

<<<<<<< HEAD
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


=======
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http
      .get('http://192.168.1.111:3000/api/todos')
  }

  post(todo: Todo): Observable<any> {
    return this.http.post('http://192.168.1.111:3000/api/todos', todo)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://192.168.1.111:3000/api/todos/${id}`)
  }

>>>>>>> master
}
