import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'

import {switchMap} from 'rxjs/operators'
import {MetalModel} from '../../../models/metal.model'
import {PreciousMetalsService} from '../../../services'
import {EPreciousMetalsActionTypes, GetPreciousMetalsSuccess, PreciousMetalsActions} from '../../actions'


@Injectable()
export class PreciousMetalsEffects {


  @Effect()
  getPreciousMetals$ = this._actions$.pipe(
    ofType(EPreciousMetalsActionTypes.GetPreciousMetals),
    switchMap(() => this._service.getPreciousMetals()),
    switchMap((metalModels: MetalModel[]) => of(new GetPreciousMetalsSuccess(metalModels))),
  )

  constructor(private _actions$: Actions<PreciousMetalsActions>, private _service: PreciousMetalsService) {
  }
}
