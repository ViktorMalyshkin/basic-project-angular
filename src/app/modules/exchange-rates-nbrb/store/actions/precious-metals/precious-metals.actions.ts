import { Action } from '@ngrx/store'
import { IMetal } from '../../../models/metal.model'

export enum EPreciousMetalsActionTypes {
  GetPreciousMetals = '[PreciousMetals] GET Precious Metals',
  GetPreciousMetalsSuccess = '[PreciousMetals] GET Precious Metals Success',
}

export class GetPreciousMetals implements Action {
  readonly type = EPreciousMetalsActionTypes.GetPreciousMetals
}

export class GetPreciousMetalsSuccess implements Action {
  readonly type = EPreciousMetalsActionTypes.GetPreciousMetalsSuccess

  constructor( public payload: IMetal[] ) {}
}

export type PreciousMetalsActions = GetPreciousMetals | GetPreciousMetalsSuccess
