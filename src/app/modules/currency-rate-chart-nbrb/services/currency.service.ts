import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { serializeResponseCurrencies } from '../helpers/serialize-response-currency.helper'
import { CurrencyModel } from '../models/currency.model'
import { ResponseCurrencyModel } from '../models/response/response-currency.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor( private _http: HttpClient ) {
  }

  public getCurrencies(): Observable<CurrencyModel[]> {
    return this._http.get<ResponseCurrencyModel[]>(`${ environment.api_url }/exrates/currencies`).pipe(serializeResponseCurrencies)
  }
}


