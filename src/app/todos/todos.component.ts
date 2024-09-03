import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ITodo} from "./ITodo";
import {FormsModule} from "@angular/forms";
import {TodosService} from "./todos.service";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class todosComponent {
  todos: ITodo[] = [];
  todoService = inject(TodosService);
  newTodo: string = '';

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      todos => this.todos = todos,
      error => console.error('Error fetching todos:', error)
    );
  }



  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        "id": 0,
        "title": this.newTodo,
        "creationDate": new Date().toLocaleDateString(),
        "isDone": false,
      });
      this.newTodo = '';
    }
  }

  get activeTodos(): ITodo[] {
    return this.todos.filter(todo => !todo.isDone);
  }

  get completedTodos(): ITodo[] {
    return this.todos.filter(todo => todo.isDone);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(todo: ITodo) {
    todo.isDone = !todo.isDone;
  }
}
