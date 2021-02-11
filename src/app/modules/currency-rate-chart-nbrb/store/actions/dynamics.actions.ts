import { Action } from '@ngrx/store'
import { IDynamicsModel } from '../../models/dynamics.model'

export enum E_DYNAMICS_ACTION_TYPES {
  GET_DYNAMICS = '[Dynamics] GET Dynamics',
  GET_DYNAMICS_SUCCESS = '[Dynamics] GET Dynamics Success',
}

export class GetDynamics implements Action {
  readonly type = E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS

  constructor( readonly payload: { currency, startDate, endDate } ) {}
}

export class GetDynamicsSuccess implements Action {
  readonly type = E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS_SUCCESS

  constructor( public payload: IDynamicsModel[] ) {}
}

export type DynamicsActions = GetDynamics | GetDynamicsSuccess
