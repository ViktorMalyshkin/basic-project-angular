import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'

import { switchMap } from 'rxjs/operators'
import { IIngot } from '../../../models/ingot.model'
import { PreciousMetalRatesService } from '../../../services'
import { EPreciousMetalRatesActionTypes, GetPreciousMetalRatesSuccess, PreciousMetalRatesActions } from '../../actions'


@Injectable()
export class PreciousMetalRatesEffects {


  @Effect()
  getPreciousMetalRatesRates$ = this._actions$.pipe(
    ofType(EPreciousMetalRatesActionTypes.GetPreciousMetalRates),
    switchMap(() => this._service.getPreciousMetalRates()),
    switchMap(( preciousMetalRatesHttp: IIngot[] ) => of(new GetPreciousMetalRatesSuccess(preciousMetalRatesHttp))),
  )

  constructor( private _actions$: Actions<PreciousMetalRatesActions>, private _service: PreciousMetalRatesService ) {}
}
