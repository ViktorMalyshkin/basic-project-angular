import { createSelector } from '@ngrx/store'
import { IExchangeRatesNbrbState } from '../state'
import { CURRENCY_RATES_FEATURE_KEY, ICurrencyRatesState } from '../state/currency-rates.state'

const selectCurrencyRates = ( state: IExchangeRatesNbrbState ) => state[ CURRENCY_RATES_FEATURE_KEY ]

export const selectCurrencyRateList = createSelector(selectCurrencyRates,
  ( state: ICurrencyRatesState ) => state.rates)
