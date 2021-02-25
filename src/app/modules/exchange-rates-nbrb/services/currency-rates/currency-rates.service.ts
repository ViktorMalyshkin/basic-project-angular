import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../../../../../environments/environment'
import {RateModel} from '../../models/rate.model'
import {ResponseRateModel} from '../../models/response/response-rate.model'
import {serializeResponseRates} from '../../helpers/serialize-response-rate.helper'

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {

  constructor(private http: HttpClient) {
  }

  // TODO getCurrencyRates
  public getCurrencyRates(): Observable<RateModel[]> {
    const _params = new HttpParams({fromObject: {periodicity: '0'}})
    return this.http.get<ResponseRateModel[]>(`${environment.api_url}/exrates/rates`, {params: _params})
      .pipe(serializeResponseRates)
  }
}
