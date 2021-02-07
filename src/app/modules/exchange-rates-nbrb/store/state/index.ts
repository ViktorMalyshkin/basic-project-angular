import { RouterReducerState } from '@ngrx/router-store'
import { ICurrencyRatesState, initialCurrencyRatesState } from './currency-rates.state'
import { initialPreciousMetalRatesState, IPreciousMetalRatesState } from './precious-metal-rates.state'
import { initialPreciousMetalsState, IPreciousMetalsState } from './precious-metals.state'

export interface IExchangeRatesNbrbState {
  router?: RouterReducerState
  metals: IPreciousMetalsState
  ingots: IPreciousMetalRatesState
  rates: ICurrencyRatesState
}

export const initialExchangeRatesNbrbState: IExchangeRatesNbrbState = {
  metals: initialPreciousMetalsState,
  ingots: initialPreciousMetalRatesState,
  rates: initialCurrencyRatesState,
}

export function getInitialState(): IExchangeRatesNbrbState {
  return initialExchangeRatesNbrbState
}
