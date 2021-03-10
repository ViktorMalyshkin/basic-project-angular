import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { serializeResponseCurrencies } from '../helpers/serialize-response-currency.helper'
import { CurrencyModel } from '../models/currency.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor( private _http: HttpClient ) {}

  public getCurrencies(): Observable<CurrencyModel[]> {
      return this._http.get<CurrencyModel[]>(`${ environment.api_url }/exrates/currencies`).pipe(serializeResponseCurrencies)
  }
}


