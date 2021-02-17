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
      ( action: ReturnType<any> ) => {

        // postman.setNextRequest('https://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=2016-7-1&endDate=2016-7-30');

        // let cur_id = action.payload.currency
        // const cur_id_rub_before_2016_7_1 = '190'
        // const cur_id_rub_after_2016_7_1 = '298'
        // let startDate = action.payload.startDate
        // const endDate = action.payload.endDate
        //
        // if (cur_id !== cur_id_rub_before_2016_7_1 || cur_id !== cur_id_rub_after_2016_7_1) {
        //   console.log('Данный код является RUB')
        //   const modification_date_rub_code = '2016-7-1'
        //   if (startDate < modification_date_rub_code && modification_date_rub_code <= endDate) {
        //     const startDate_of_rub = startDate
        //     startDate = '2016-7-1'
        //     cur_id !== cur_id_rub_after_2016_7_1 && (cur_id = cur_id_rub_after_2016_7_1)
        //   }
        // }


        return this._service.getDynamics(action.payload.currency, action.payload.startDate, action.payload.endDate)
      }),
    switchMap(( modelsHttp: IDynamicsModel[] ) => of(new GetDynamicsSuccess(modelsHttp))),
  )

  constructor( private actions$: Actions<DynamicsActions>, private _service: DynamicsService ) {}
}
