import { createFeatureSelector } from '@ngrx/store'
import * as fromDynamics from '../reducers/dynamics.reducer'

export const selectDynamicsState = createFeatureSelector<fromDynamics.State>(
  fromDynamics.dynamicsFeatureKey,
)
