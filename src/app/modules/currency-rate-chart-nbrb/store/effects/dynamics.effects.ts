import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { forkJoin, Observable, of } from 'rxjs'

import { switchMap } from 'rxjs/operators'
import { DynamicsModel } from '../../models/dynamics.model'
import { DynamicsService } from '../../services/dynamics.service'
import { DynamicsActions, E_DYNAMICS_ACTION_TYPES, GetDynamics, GetDynamicsFailure, GetDynamicsSuccess } from '../actions/dynamics.actions'

const currencyRub = {
  idBefore: '190',
  idModified: '298',
  dateBefore: '2016-6-30',
  dateModification: '2016-7-1',
}

@Injectable()
export class DynamicsEffects {


  @Effect()
  getDynamics$ = this.actions$.pipe(
    ofType<GetDynamics>(E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS),
    switchMap(
      ( action: ReturnType<any> ) => this.checkForRussianCurrency(action.payload.currency, action.payload.startDate,
        action.payload.endDate),
    ),
    switchMap(response => response ? of(new GetDynamicsSuccess(response)) : of(new GetDynamicsFailure())),
  )

  constructor( private actions$: Actions<DynamicsActions>, private _service: DynamicsService ) {}

  checkForRussianCurrency( idCurrency: string, startDate: string, endDate: string ): Observable<DynamicsModel[]> {
    if (idCurrency === currencyRub.idBefore || idCurrency === currencyRub.idModified) {
      this.checkRangeForRussianCurrency(idCurrency, startDate, endDate)
    } else {
      return this._service.getDynamics(idCurrency, startDate, endDate)
    }
  }

  checkRangeForRussianCurrency( idCurrency: string, startDate: string, endDate: string ): Observable<DynamicsModel[]> {
    switch (true) {
      case endDate <= currencyRub.dateBefore:
        return this._service.getDynamics(currencyRub.idBefore, startDate, endDate)
      case currencyRub.dateModification <= startDate:
        return this._service.getDynamics(currencyRub.idModified, startDate, endDate)
      case startDate <= currencyRub.dateModification && currencyRub.dateModification <= endDate:
        const getDynamicsBefore: Observable<DynamicsModel[]> = this._service.getDynamics(currencyRub.idBefore, startDate,
          currencyRub.dateBefore)
        const getDynamicsAfter: Observable<DynamicsModel[]> = this._service.getDynamics(currencyRub.idModified, startDate,
          currencyRub.dateModification)
        const makeRequestInParallel = (): Observable<DynamicsModel[]> => {
          const observableDynamics: Observable<DynamicsModel[]>[] = [getDynamicsBefore, getDynamicsAfter]
          return forkJoin(...observableDynamics)
        }
        return makeRequestInParallel()
    }
  }


}
