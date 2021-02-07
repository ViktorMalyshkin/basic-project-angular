import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { IPreciousMetalsState } from '../state/precious-metals.state'

const selectPreciousMetals = ( state: IExchangeRatesNbrbState ) => state.metals

export const selectPreciousMetalList = createSelector(selectPreciousMetals,
  ( state: IPreciousMetalsState ) => state.metals)
