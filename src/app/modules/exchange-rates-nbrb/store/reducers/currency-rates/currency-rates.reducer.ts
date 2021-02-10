import { CurrencyRatesActions, ECurrencyRatesActionTypes } from '../../actions'
import { ICurrencyRatesState, initialCurrencyRatesState } from '../../state/currency-rates.state'

export function currencyRatesReducers( state = initialCurrencyRatesState, action: CurrencyRatesActions ): ICurrencyRatesState {
  switch (action.type) {
    case ECurrencyRatesActionTypes.GetCurrencyRatesSuccess:
      console.log(state)
      console.log(action.payload)
      return { ...state, rates: action.payload }
    default:
      return state
  }
}
