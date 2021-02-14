import { RouterReducerState } from '@ngrx/router-store'
import { CurrensyModel } from '../../models/currensy.model'
import { CurrencyActions, E_CURRENCIES_ACTION_TYPES } from '../actions/currency.actions'

export const CURRENCIES_FEATURE_KEY = 'CURRENCIES'

export interface CurrenciesState {
  router?: RouterReducerState
  currencies: CurrensyModel[]
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
