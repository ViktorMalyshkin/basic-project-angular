import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { testApiCurrencies } from '../data/testApiCurrancies'
import { serializeResponseCurrencies } from '../helpers/serialize-response-currency.helper'
import { CurrencyModel } from '../models/currency.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  arrayCurrencies: any

  constructor( private _http: HttpClient ) {
    this.arrayCurrencies = testApiCurrencies
  }

  public getCurrencies(): Observable<CurrencyModel[]> {
    if (environment.env_name === 'PROD') {
      return this._http.get<CurrencyModel[]>(`${ environment.api_url }/exrates/currencies`).pipe(serializeResponseCurrencies)
    } else {
      // TODO TEMP API
      setTimeout(() => {
        return of(this.arrayCurrencies).pipe(serializeResponseCurrencies)

      }, 0)
    }
  }
}


