import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../reducers'
import { CURRENCY_RATES_FEATURE_KEY, ICurrencyRatesState } from '../reducers/currency-rates/currency-rates.reducer'

const selectCurrencyRates = ( state: IExchangeRatesNbrbState ) => state[ CURRENCY_RATES_FEATURE_KEY ]

export const selectCurrencyRateList = createSelector(selectCurrencyRates,
  ( state: ICurrencyRatesState ) => state.rates)
