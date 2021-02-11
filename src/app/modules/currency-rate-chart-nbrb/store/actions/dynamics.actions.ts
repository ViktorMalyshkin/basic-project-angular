import { Action } from '@ngrx/store'

export enum DynamicsActionTypes {
  LoadDynamicss = '[Dynamics] Load Dynamicss',


}

export class LoadDynamicss implements Action {
  readonly type = DynamicsActionTypes.LoadDynamicss
}


export type DynamicsActions = LoadDynamicss;
