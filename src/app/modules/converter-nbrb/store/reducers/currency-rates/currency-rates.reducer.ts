import { RateModel } from '../../../../exchange-rates-nbrb/models/rate.model'
import { CurrencyRatesActions, ECurrencyRatesActionTypes } from '../../actions'

export const CURRENCY_RATES_FEATURE_KEY = 'CURRENCY_RATES_FEATURE_KEY'

export interface ICurrencyRatesState {
  rates: RateModel[]
}

export const initialCurrencyRatesState: ICurrencyRatesState = {
  rates: [],
}

export function currencyRatesReducers( state = initialCurrencyRatesState, action: CurrencyRatesActions ): ICurrencyRatesState {
  switch (action.type) {
    case ECurrencyRatesActionTypes.GetCurrencyRatesSuccess:
      return { ...state, rates: action.payload }
    default:
      return state
  }
}
