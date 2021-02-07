import { Action } from '@ngrx/store';

export enum ExchangeRatesNbrbActionTypes {
  LoadExchangeRatesNbrbs = '[ExchangeRatesNbrb] Load ExchangeRatesNbrbs',
  
  
}

export class LoadExchangeRatesNbrbs implements Action {
  readonly type = ExchangeRatesNbrbActionTypes.LoadExchangeRatesNbrbs;
}


export type ExchangeRatesNbrbActions = LoadExchangeRatesNbrbs;
