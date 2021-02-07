import { PreciousMetalRatesActions, EPreciousMetalRatesActionTypes } from '../../actions'
import { initialPreciousMetalRatesState, IPreciousMetalRatesState } from '../../state/precious-metal-rates.state'

export function preciousMetalRatesReducers( state = initialPreciousMetalRatesState,
                                            action: PreciousMetalRatesActions ): IPreciousMetalRatesState {
  switch (action.type) {
    case EPreciousMetalRatesActionTypes.GetPreciousMetalRatesSuccess:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
