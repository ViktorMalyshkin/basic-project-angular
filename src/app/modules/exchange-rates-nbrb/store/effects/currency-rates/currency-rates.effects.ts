import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'

import {switchMap} from 'rxjs/operators'
import {RateModel} from '../../../models/rate.model'
import {CurrencyRatesService} from '../../../services'
import {CurrencyRatesActions, ECurrencyRatesActionTypes, GetCurrencyRatesSuccess} from '../../actions'


@Injectable()
export class CurrencyRatesEffects {


  @Effect()
  getCurrencyRates$ = this._actions$.pipe(
    ofType(ECurrencyRatesActionTypes.GetCurrencyRates),
    switchMap(() => this._service.getCurrencyRates()),
    switchMap((rateModels: RateModel[]) => of(new GetCurrencyRatesSuccess(rateModels))),
  )

  constructor(private _actions$: Actions<CurrencyRatesActions>, private _service: CurrencyRatesService) {
  }
}
