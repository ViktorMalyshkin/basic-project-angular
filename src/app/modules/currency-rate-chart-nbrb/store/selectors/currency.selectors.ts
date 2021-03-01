import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrency from '../reducers/currency.reducer';

export const selectCurrencyState = createFeatureSelector<fromCurrency.CurrenciesState>(
  fromCurrency.CURRENCIES_FEATURE_KEY
)
