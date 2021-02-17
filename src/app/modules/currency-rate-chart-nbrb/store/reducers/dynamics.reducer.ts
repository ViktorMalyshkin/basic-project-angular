import { RouterReducerState } from '@ngrx/router-store'
import { IDynamicsModel } from '../../models/dynamics.model'
import { DynamicsActions, E_DYNAMICS_ACTION_TYPES } from '../actions/dynamics.actions'

export const DYNAMICS_FEATURE_KEY = 'DYNAMICS'

export interface DynamicsState {
  router?: RouterReducerState
  dynamics: IDynamicsModel[]
}

export const initialDynamicsState: DynamicsState = {
  dynamics: []
}

export function dynamicsReducer( state = initialDynamicsState, action: DynamicsActions ): DynamicsState {
  switch (action.type) {
    case E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS_SUCCESS:
      return { ...state, dynamics: action.payload }
    case E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS_FAILURE:
      return { ...state }
    default:
      return state
  }
}
