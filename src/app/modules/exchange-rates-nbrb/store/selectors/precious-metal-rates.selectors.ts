import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { IPreciousMetalRatesState } from '../state/precious-metal-rates.state'

const selectPreciousMetalRates = ( state: IExchangeRatesNbrbState ) => state.ingots

export const selectPreciousMetalRateList = createSelector(selectPreciousMetalRates,
  ( state: IPreciousMetalRatesState ) => state.ingots)
