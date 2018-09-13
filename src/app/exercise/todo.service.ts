import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import TodoItem from './TodoItem';
import {t} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { }

  saveItem(item: TodoItem) {
    return this.http.post(this.todoUrl, item);
  }

  getHeroes (): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl);
  }
}
