import { RouterReducerState } from '@ngrx/router-store'
import { ICurrencyRatesState, initialCurrencyRatesState } from './currency-rates.state'
import { initialPreciousMetalRatesState, IPreciousMetalRatesState } from './precious-metal-rates.state'
import { initialPreciousMetalsState, IPreciousMetalsState } from './precious-metals.state'

export interface IExchangeRatesNbrbState {
  router?: RouterReducerState
  rates: ICurrencyRatesState
  metals: IPreciousMetalsState
  ingots: IPreciousMetalRatesState
}

export const initialExchangeRatesNbrbState: IExchangeRatesNbrbState = {
  rates: initialCurrencyRatesState,
  metals: initialPreciousMetalsState,
  ingots: initialPreciousMetalRatesState,
}

export function getInitialState(): IExchangeRatesNbrbState {
  return initialExchangeRatesNbrbState
}
