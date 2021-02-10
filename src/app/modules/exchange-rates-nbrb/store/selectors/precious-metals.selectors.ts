import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { IPreciousMetalsState, PRECIOUS_METALS_FEATURE_KEY } from '../state/precious-metals.state'

const selectPreciousMetals = ( state: IExchangeRatesNbrbState ) => state[PRECIOUS_METALS_FEATURE_KEY]

export const selectPreciousMetalList = createSelector(selectPreciousMetals,
  ( state: IPreciousMetalsState ) => state.metals)
