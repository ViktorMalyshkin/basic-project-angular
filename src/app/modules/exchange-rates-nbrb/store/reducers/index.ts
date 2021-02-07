import { routerReducer } from '@ngrx/router-store'
import { ActionReducerMap } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { currencyRatesReducers } from './currency-rates/currency-rates.reducer'
import { preciousMetalRatesReducers } from './precious-metal-rates/precious-metal-rates.reducer'
import { preciousMetalsReducers } from './precious-metals/precious-metals.reducer'

export const EXCHANGE_RATES_NBRB_REDUCER_NODES = 'EXCHANGE_RATES_NBRB'

export const exchangeRatesNbrbReducers: ActionReducerMap<IExchangeRatesNbrbState, any> = {
  router: routerReducer,
  metals: preciousMetalsReducers,
  ingots: preciousMetalRatesReducers,
  rates: currencyRatesReducers,
}
