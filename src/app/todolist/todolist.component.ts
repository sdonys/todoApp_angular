import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ITodo} from "./ITodo";
import {FormsModule} from "@angular/forms";

const todos: ITodo[] = [
  {
    "id": 0,
    "title": "Learn Angular",
    "creationDate": "2024-08-05",
    "isDone": true
  },
  {
    "id": 1,
    "title": "Learn Signal",
    "creationDate": "2024-08-05",
    "isDone": true
  },
  {
    "id": 2,
    "title": "Create a todo app",
    "creationDate": "2024-08-06",
    "isDone": false
  },
  {
    "id": 3,
    "title": "Play with my dog",
    "creationDate": "2024-08-06",
    "isDone": false
  },
  {
    "id": 4,
    "title": "Brew some coffee",
    "creationDate": "2024-08-06",
    "isDone": false
  }
]

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule,
  ],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  todos: ITodo[] = todos;

  newTodo: string = '';

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
