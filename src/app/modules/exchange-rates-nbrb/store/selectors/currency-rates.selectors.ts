import { createFeatureSelector } from '@ngrx/store'
import * as fromCurrencyRates from '../state/currency-rates.state'

export const selectCurrencyRates = createFeatureSelector<fromCurrencyRates.ICurrencyRatesState>(
  fromCurrencyRates.CURRENCY_RATES_FEATURE_KEY,
)
