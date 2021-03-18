import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import { ActionReducerMap } from '@ngrx/store'
import { ICurrencyRatesState, initialCurrencyRatesState } from '../../../exchange-rates-nbrb/store/state/currency-rates.state'
import { currencyRatesReducers } from './currency-rates/currency-rates.reducer'

export const EXCHANGE_RATES_NBRB_REDUCER_NODES = 'EXCHANGE_RATES_NBRB'

export const exchangeRatesNbrbReducers: ActionReducerMap<IExchangeRatesNbrbState, any> = {
  router: routerReducer,
  rates: currencyRatesReducers,
}


export interface IExchangeRatesNbrbState {
  router?: RouterReducerState
  rates: ICurrencyRatesState
}

export const initialExchangeRatesNbrbState: IExchangeRatesNbrbState = {
  rates: initialCurrencyRatesState,
}
