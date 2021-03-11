import { createFeatureSelector } from '@ngrx/store'
import * as fromDynamics from '../reducers/dynamics.reducer'

export const selectDynamicsState = createFeatureSelector<fromDynamics.IDynamicsState>(
  fromDynamics.DYNAMICS_FEATURE_KEY,
)
