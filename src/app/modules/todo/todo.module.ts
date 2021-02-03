import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo.reducer';
import {TodoComponent} from './page/todo/todo.component';
import {RouterModule} from '@angular/router';
import {todoRoutes} from './routes/todo.routes';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
  ],
})
export class TodoModule {
}
