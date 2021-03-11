import { createFeatureSelector } from '@ngrx/store'
import * as fromCurrency from '../reducers/currency.reducer'

export const selectCurrencyState = createFeatureSelector<fromCurrency.ICurrenciesState>(
  fromCurrency.CURRENCIES_FEATURE_KEY,
)
