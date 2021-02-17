import { Action } from '@ngrx/store'
import { IDynamicsModel } from '../../models/dynamics.model'

export enum E_DYNAMICS_ACTION_TYPES {
  GET_DYNAMICS = '[Dynamics] GET Dynamics',
  GET_DYNAMICS_SUCCESS = '[Dynamics] GET Dynamics Success',
  GET_DYNAMICS_FAILURE = '[Dynamics] GET Dynamics Failure',
}

export class GetDynamics implements Action {
  readonly type = E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS

  constructor( readonly payload: { currency, startDate, endDate } ) {}
}

export class GetDynamicsSuccess implements Action {
  readonly type = E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS_SUCCESS

  constructor( public payload: IDynamicsModel[] ) {}
}

export class GetDynamicsFailure implements Action {
  readonly type = E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS_FAILURE
}



export type DynamicsActions = GetDynamics | GetDynamicsSuccess | GetDynamicsFailure
