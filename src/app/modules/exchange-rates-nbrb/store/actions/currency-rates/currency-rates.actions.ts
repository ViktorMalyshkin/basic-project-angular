import {Action} from '@ngrx/store'
import {RateModel} from '../../../models/rate.model'

export enum ECurrencyRatesActionTypes {
  GetCurrencyRates = '[CurrencyRates] GET Currency Rates',
  GetCurrencyRatesSuccess = '[CurrencyRates] GET Currency Rates Success',
}

export class GetCurrencyRates implements Action {
  readonly type = ECurrencyRatesActionTypes.GetCurrencyRates
}

export class GetCurrencyRatesSuccess implements Action {
  readonly type = ECurrencyRatesActionTypes.GetCurrencyRatesSuccess

  constructor(public payload: RateModel[]) {
  }
}

export type CurrencyRatesActions = GetCurrencyRates | GetCurrencyRatesSuccess
