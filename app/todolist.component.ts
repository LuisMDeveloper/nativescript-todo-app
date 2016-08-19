import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todolist.component.html'
})
export class TodoListComponent implements OnInit {
    todoList: Array<Todo> = [];
    todoTask: string = '';

    constructor() { }

    ngOnInit() { 
        this.todoList.push({ task: 'Learn ES6', done: false });
        this.todoList.push({ task: 'Learn Angular 2', done: false });
        this.todoList.push({ task: 'Learn NativeScript', done: true });
    }

    public onItemTap(args) {
        this.todoList[args.index].done = !this.todoList[args.index].done;
        this.todoList = [...this.todoList];
    }

    public addTodo(args) {
        this.todoList = [...this.todoList, new Todo(this.todoTask)];
        console.log(this.todoTask);
    }

}