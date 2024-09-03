import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ITodo} from "./ITodo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'http://localhost:3000/todos'; // Adjust if your backend is on a different port

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.apiUrl);
  }

  addTodo(todo: Omit<ITodo, 'id' | 'creationDate'>): Observable<ITodo> {
    return this.http.post<ITodo>(this.apiUrl, todo);
  }

  updateTodo(id: number, todo: Partial<ITodo>): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
