import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../models/todo';

@Injectable()
export class HttpService {

  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http
      .get(`${this.url}/api/todos`)
  }

  post(todo: Todo): Observable<any> {
    return this.http.post(`${this.url}/api/todos`, todo)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/api/todos/${id}`)
  }

  put(todo: Todo): Observable<any> {
    return this.http.put(`${this.url}/api/todos`, todo)
  }

}
