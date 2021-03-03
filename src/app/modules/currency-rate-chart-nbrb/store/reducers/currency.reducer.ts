import { RouterReducerState } from '@ngrx/router-store'
import { CurrencyModel } from '../../models/currency.model'
import { CurrencyActions, E_CURRENCIES_ACTION_TYPES } from '../actions/currency.actions'

export const CURRENCIES_FEATURE_KEY = 'CURRENCIES'

export interface CurrenciesState {
  router?: RouterReducerState
  currencies: CurrencyModel[]
}

export const initialCurrenciesState: CurrenciesState = {
  currencies: [],
}

export function currenciesReducer( state = initialCurrenciesState, action: CurrencyActions ): CurrenciesState {
  switch (action.type) {

    case E_CURRENCIES_ACTION_TYPES.GET_CURRENCIES_SUCCESS:
      return { ...state, currencies: action.payload }

    default:
      return state
  }
}
