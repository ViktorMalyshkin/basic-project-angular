import { Action } from '@ngrx/store'
import { IIngot } from '../../../models/ingot.model'

export enum EPreciousMetalRatesActionTypes {
  GetPreciousMetalRates = '[PreciousMetalRates] GET Precious Metal Rates',
  GetPreciousMetalRatesSuccess = '[PreciousMetalRates] GET Precious Metal Rates Success',
}

export class GetPreciousMetalRates implements Action {
  readonly type = EPreciousMetalRatesActionTypes.GetPreciousMetalRates
}

export class GetPreciousMetalRatesSuccess implements Action {
  readonly type = EPreciousMetalRatesActionTypes.GetPreciousMetalRatesSuccess

  constructor( public payload: IIngot[] ) {}
}

export type PreciousMetalRatesActions = GetPreciousMetalRates | GetPreciousMetalRatesSuccess
