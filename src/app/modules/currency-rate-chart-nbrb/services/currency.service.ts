import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { CurrensyModel } from '../models/currensy.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor( private _http: HttpClient ) { }

  public getCurrencies(): Observable<CurrensyModel[]> {
    if (environment.env_name === 'PROD') {
      return this._http.get<CurrensyModel[]>(`${ environment.api_url }/exrates/currencies`)
    } else {
      // TODO TEMP API
      return of([
        {
          Cur_ID: 145, Cur_ParentID: 145, Cur_Code: '840', Cur_Abbreviation: 'USD', Cur_Name: 'Доллар США',
          Cur_Name_Bel: 'Долар ЗША', Cur_Name_Eng: 'US Dollar', Cur_QuotName: '1 Доллар США', Cur_QuotName_Bel: '1 Долар ЗША',
          Cur_QuotName_Eng: '1 US Dollar', Cur_NameMulti: 'Долларов США', Cur_Name_BelMulti: 'Долараў ЗША',
          Cur_Name_EngMulti: 'US Dollars', Cur_Scale: 1, Cur_Periodicity: 0, Cur_DateStart: '2016-06-01T00:00:00',
          Cur_DateEnd: '2016-06-30T00:00:00',
        },
      ])
    }
  }
}
