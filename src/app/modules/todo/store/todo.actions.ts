import { Action } from '@ngrx/store'

export enum todoActionsType {
  create = '[TODO] Todo create item',
  delete = '[TODO] Todo delete item',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create

  constructor( public payload: { name: string } ) {
  }
}


export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete

  constructor( public payload: { id: number } ) {
  }
}




export type TodoActions = TodoCreateAction | TodoDeleteAction
