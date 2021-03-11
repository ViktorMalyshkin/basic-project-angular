import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { GetCurrencies } from '../store/actions/currency.actions'

@Injectable({
  providedIn: 'root',
})
export class StateResolverGuard implements Resolve<unknown> {

  constructor( private _store: Store ) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> | Promise<any> | any {
    if (route.data) {
      this._store.dispatch(new GetCurrencies())
      this._store.dispatch({ type: route.data.type, payload: route.data.param })
    }
    return of('NONE')
  }
}
