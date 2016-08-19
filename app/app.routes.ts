import { RouterConfig } from '@angular/router';
import { nsProvideRouter } from 'nativescript-angular/router';
import { TodoListComponent } from "./todolist.component";

export const routes: RouterConfig = [
    { path: "", component: TodoListComponent }
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];