import { RouterReducerState } from '@ngrx/router-store'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DynamicsModel } from '../../models/dynamics.model'
import { DynamicsState } from '../reducers/dynamics.reducer'
import * as fromDynamics from '../reducers/dynamics.reducer'

export const selectDynamicsState = createFeatureSelector<fromDynamics.DynamicsState>(
  fromDynamics.DYNAMICS_FEATURE_KEY,
)

export const selectDynamics = createSelector(
  selectDynamicsState,
  (state: DynamicsState) => state.dynamics
)
