import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ExchangeRatesNbrbActionTypes, ExchangeRatesNbrbActions } from '../actions/exchange-rates-nbrb.actions';



@Injectable()
export class ExchangeRatesNbrbEffects {


  @Effect()
  loadExchangeRatesNbrbs$ = this.actions$.pipe(
    ofType(ExchangeRatesNbrbActionTypes.LoadExchangeRatesNbrbs),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ExchangeRatesNbrbActions>) {}

}
