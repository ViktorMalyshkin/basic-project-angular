import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PreciousMetalsActionTypes, PreciousMetalsActions } from '../actions/precious-metals.actions';



@Injectable()
export class PreciousMetalsEffects {


  @Effect()
  loadPreciousMetalss$ = this.actions$.pipe(
    ofType(PreciousMetalsActionTypes.LoadPreciousMetalss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<PreciousMetalsActions>) {}

}
