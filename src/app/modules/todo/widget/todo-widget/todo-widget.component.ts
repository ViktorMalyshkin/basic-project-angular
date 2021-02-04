import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { TodoModel } from '../../models/todo.model'
import { TodoCreateAction, TodoDeleteAction } from '../../store/todo.actions'
import { TodoState } from '../../store/todo.reducer'
import { todoListSelector } from '../../store/todo.selectors'

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css'],
})
export class TodoWidgetComponent implements OnInit {
  todoList$: Observable<TodoModel[]> = this.store$.pipe(select(todoListSelector))

  constructor( private store$: Store<TodoState> ) { }

  ngOnInit(): void {
  }

  onCreate( name: string ): void {

    console.log(name)
    this.store$.dispatch(new TodoCreateAction({ name }))
  }

  onDelete( id: number ): void {
    this.store$.dispatch(new TodoDeleteAction({ id }))
  }
}
