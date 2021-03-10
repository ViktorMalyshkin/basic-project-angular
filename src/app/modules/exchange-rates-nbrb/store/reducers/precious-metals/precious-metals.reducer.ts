import { EPreciousMetalsActionTypes, PreciousMetalsActions } from '../../actions'
import { initialPreciousMetalsState, IPreciousMetalsState } from '../../state/precious-metals.state'

export function preciousMetalsReducers( state = initialPreciousMetalsState,
                                        action: PreciousMetalsActions ): IPreciousMetalsState {
  switch (action.type) {
    case EPreciousMetalsActionTypes.GetPreciousMetalsSuccess:
      return { ...state, metals: action.payload }
    default:
      return state
  }
}
