import { createFeatureSelector } from '@ngrx/store'
import * as fromCurrencyRates from '../state/currency-rates.state'

export const selectCurrencyRates = createFeatureSelector<fromCurrencyRates.ICurrencyRatesState>(
  fromCurrencyRates.currencyRatesFeatureKey,
)


// const selectCurrency = ( state: ICurrencyState ) => state.rates
//
// export const selectRates = createSelector(selectCurrency, ( state: ICurrencyState ) => state.rates)
