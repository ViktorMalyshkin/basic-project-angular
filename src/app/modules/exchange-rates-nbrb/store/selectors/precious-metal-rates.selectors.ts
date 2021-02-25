import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { IPreciousMetalRatesState, PRECIOUS_METAL_RATES_FEATURE_KEY } from '../state/precious-metal-rates.state'

const selectPreciousMetalRates = ( state: IExchangeRatesNbrbState ) => state[ PRECIOUS_METAL_RATES_FEATURE_KEY ]

export const selectPreciousMetalRateList = createSelector(selectPreciousMetalRates,
  ( state: IPreciousMetalRatesState ) => state.ingots)
