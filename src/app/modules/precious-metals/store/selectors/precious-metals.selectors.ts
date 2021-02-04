import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPreciousMetals from '../reducers/precious-metals.reducer';

export const selectPreciousMetalsState = createFeatureSelector<fromPreciousMetals.State>(
  fromPreciousMetals.preciousMetalsFeatureKey
);
