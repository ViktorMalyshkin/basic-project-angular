import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExchangeRatesNbrb from '../reducers/exchange-rates-nbrb.reducer';

export const selectExchangeRatesNbrbState = createFeatureSelector<fromExchangeRatesNbrb.State>(
  fromExchangeRatesNbrb.exchangeRatesNbrbFeatureKey
);
