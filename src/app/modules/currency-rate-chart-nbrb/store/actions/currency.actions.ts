import { Action } from '@ngrx/store'
import { CurrensyModel } from '../../models/currensy.model'

export enum E_CURRENCIES_ACTION_TYPES {
  GET_CURRENCIES = '[Currencies] GET Currencies',
  GET_CURRENCIES_SUCCESS = '[Currencies] GET Currencies Success',
}

export class GetCurrencies implements Action {
  readonly type = E_CURRENCIES_ACTION_TYPES.GET_CURRENCIES
}

export class GetCurrenciesSuccess implements Action {
  readonly type = E_CURRENCIES_ACTION_TYPES.GET_CURRENCIES_SUCCESS

  constructor( public payload: CurrensyModel[] ) {}
}

export type CurrencyActions = GetCurrencies | GetCurrenciesSuccess;
