import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'

import { switchMap } from 'rxjs/operators'
import { IDynamicsModel } from '../../models/dynamics.model'
import { DynamicsService } from '../../services/dynamics.service'
import { DynamicsActions, E_DYNAMICS_ACTION_TYPES, GetDynamics, GetDynamicsSuccess } from '../actions/dynamics.actions'


@Injectable()
export class DynamicsEffects {


  @Effect()
  getDynamics$ = this.actions$.pipe(
    ofType<GetDynamics>(E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS),
    switchMap(
      ( action: ReturnType<any> ) => this._service.getDynamics(action.payload.currency, action.payload.startDate, action.payload.endDate)),
    switchMap(( modelsHttp: IDynamicsModel[] ) => of(new GetDynamicsSuccess(modelsHttp))),
  )

  constructor( private actions$: Actions<DynamicsActions>, private _service: DynamicsService ) {}
}
