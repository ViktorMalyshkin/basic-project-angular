import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'

import { switchMap } from 'rxjs/operators'
import { CurrensyModel } from '../../models/currensy.model'
import { CurrencyService } from '../../services/currency.service'
import { CurrencyActions, E_CURRENCIES_ACTION_TYPES, GetCurrenciesSuccess } from '../actions/currency.actions'


@Injectable()
export class CurrencyEffects {


  @Effect()
  GetCurrencies$ = this.actions$.pipe(
    ofType(E_CURRENCIES_ACTION_TYPES.GET_CURRENCIES),
    switchMap(() => this._service.getCurrencies()),
    switchMap(( modelsHttp: CurrensyModel[] ) => of(new GetCurrenciesSuccess(modelsHttp))),
  )

  constructor( private actions$: Actions<CurrencyActions>, private _service: CurrencyService ) {}
}
