import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { TodoComponent } from './page/todo/todo.component'
import { todoRoutes } from './routes/todo.routes'
import { TODO_REDUCER_NODE, todoReducer } from './store/todo.reducer';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component'


@NgModule({
  declarations: [TodoComponent, TodoWidgetComponent, TodoCreateFormUiComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
  ],
})
export class TodoModule {
}
