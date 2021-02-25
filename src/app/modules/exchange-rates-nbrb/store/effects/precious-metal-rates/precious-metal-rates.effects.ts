import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'

import {switchMap} from 'rxjs/operators'
import {PriceModel} from '../../../models/price.model'
import {PreciousMetalRatesService} from '../../../services'
import {EPreciousMetalRatesActionTypes, GetPreciousMetalRatesSuccess, PreciousMetalRatesActions} from '../../actions'


@Injectable()
export class PreciousMetalRatesEffects {


  @Effect()
  getPreciousMetalRatesRates$ = this._actions$.pipe(
    ofType(EPreciousMetalRatesActionTypes.GetPreciousMetalRates),
    switchMap(() => this._service.getPreciousMetalRates()),
    switchMap((priceModels: PriceModel[]) => of(new GetPreciousMetalRatesSuccess(priceModels))),
  )

  constructor(private _actions$: Actions<PreciousMetalRatesActions>, private _service: PreciousMetalRatesService) {
  }
}
