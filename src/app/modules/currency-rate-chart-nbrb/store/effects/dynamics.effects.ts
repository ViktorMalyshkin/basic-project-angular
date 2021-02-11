import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'

import { concatMap } from 'rxjs/operators'
import { DynamicsActions, DynamicsActionTypes } from '../actions/dynamics.actions'


@Injectable()
export class DynamicsEffects {


  @Effect()
  loadDynamicss$ = this.actions$.pipe(
    ofType(DynamicsActionTypes.LoadDynamicss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
  )


  constructor( private actions$: Actions<DynamicsActions> ) {}

}
