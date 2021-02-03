import {Route} from '@angular/router';
import {TodoComponent} from '../page/todo/todo.component';

export const todoRoutes: Route[] = [
  {
    path: '',
    component: TodoComponent,
  },
];
