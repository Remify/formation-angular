import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';

@Injectable()
export class HttpService {

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

}
