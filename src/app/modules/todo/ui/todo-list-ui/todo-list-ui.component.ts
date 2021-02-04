import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TodoModel } from '../../models/todo.model'

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css'],
})
export class TodoListUiComponent implements OnInit {
  @Input()
  todoList: TodoModel[] = []

  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete( id: number ): void {
    this.delete.emit(id)
  }
}
