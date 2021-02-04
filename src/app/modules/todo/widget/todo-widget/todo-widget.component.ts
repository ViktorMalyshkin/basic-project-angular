import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { TodoCreateAction } from '../../store/todo.actions'
import { TodoState } from '../../store/todo.reducer'

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css'],
})
export class TodoWidgetComponent implements OnInit {

  constructor( private store$: Store<TodoState> ) { }

  ngOnInit(): void {
  }

  onCreate( name: string ): void {
    console.log(name)
    this.store$.dispatch(new TodoCreateAction({ name }))
  }
}
