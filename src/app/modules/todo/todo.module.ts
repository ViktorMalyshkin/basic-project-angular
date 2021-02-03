import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { TodoComponent } from './page/todo/todo.component'
import { todoRoutes } from './routes/todo.routes'
import { TODO_REDUCER_NODE, todoReducer } from './store/todo.reducer'


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
