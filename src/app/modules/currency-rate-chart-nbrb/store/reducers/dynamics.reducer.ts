import { DynamicsActions, DynamicsActionTypes } from '../actions/dynamics.actions'

export const dynamicsFeatureKey = 'dynamics'

export interface State {

}

export const initialState: State = {}

export function reducer( state = initialState, action: DynamicsActions ): State {
  switch (action.type) {

    case DynamicsActionTypes.LoadDynamicss:
      return state

    default:
      return state
  }
}
