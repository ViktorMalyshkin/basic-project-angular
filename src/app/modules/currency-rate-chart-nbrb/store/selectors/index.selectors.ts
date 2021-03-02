import { createSelector } from '@ngrx/store'
import { CurrenciesState } from '../reducers/currency.reducer'
import { DynamicsState } from '../reducers/dynamics.reducer'
import { selectCurrencyState } from './currency.selectors'
import { selectDynamicsState } from './dynamics.selectors'

export const selectDynamicsCurrencies = createSelector(
  selectDynamicsState,
  selectCurrencyState,
  ( selectDynamics: DynamicsState, selectCurrency: CurrenciesState ) => {
    return { dynamics: selectDynamics.dynamics, currencies: selectCurrency.currencies }
  },
)
