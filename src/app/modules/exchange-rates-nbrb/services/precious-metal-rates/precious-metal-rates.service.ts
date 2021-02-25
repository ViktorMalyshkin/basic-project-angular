import {DatePipe} from '@angular/common'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../../../../../environments/environment'
import {PriceModel} from '../../models/price.model'
import {serializeResponsePrices} from '../../helpers/serialize-response-price.helper'
import {ResponsePriceModel} from '../../models/response/response-price.model'

@Injectable({
  providedIn: 'root',
})
export class PreciousMetalRatesService {

  constructor(private _http: HttpClient, private _datePipe: DatePipe) {
  }

  public getPreciousMetalRates(): Observable<PriceModel[]> {
    const dateNow = this._datePipe.transform(new Date(), 'yyyy-MM-dd')
    const _params = new HttpParams({fromObject: {ondate: dateNow}})
    return this._http.get<ResponsePriceModel[]>(`${environment.api_url}/ingots/prices`, {params: _params})
      .pipe(serializeResponsePrices)
  }
}
