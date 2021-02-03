import {TodoModel} from '../models/todo.model';
import {TodoActions, todoActionsType} from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: TodoModel[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [...state.todoList, {
          id: state.idIncrement,
          name: action.payload.name,
          completed: false,
        }],
      };
    default:
      return state;
  }
  return state;
};
