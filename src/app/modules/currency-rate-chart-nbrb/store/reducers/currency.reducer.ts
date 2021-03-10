import { CurrencyModel } from '../../models/currency.model'
import { CurrencyActions, E_CURRENCIES_ACTION_TYPES } from '../actions/currency.actions'

export const CURRENCIES_FEATURE_KEY = 'CURRENCIES'

export interface ICurrenciesState {
  currencies: CurrencyModel[]
}

export const initialCurrenciesState: ICurrenciesState = {
  currencies: [],
}

export function currenciesReducer( state = initialCurrenciesState, action: CurrencyActions ): ICurrenciesState {
  switch (action.type) {

    case E_CURRENCIES_ACTION_TYPES.GET_CURRENCIES_SUCCESS:
      return { ...state, currencies: action.payload }

    default:
      return state
  }
}
