import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { IDynamicsModel } from '../models/dynamics.model'

@Injectable({
  providedIn: 'root',
})
export class DynamicsService {

  constructor( private _http: HttpClient ) { }

  public getDynamics(currency: any, startDate: any, endDate: any): Observable<IDynamicsModel[]> {
    if (environment.env_name !== 'PROD') {
      return this._http.get<IDynamicsModel[]>(`${environment.api_url}/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`)
    } else {
      return of([
        { Cur_ID: 145, Date: '2016-06-01T00:00:00', Cur_OfficialRate: 19788.00 },
        { Cur_ID: 145, Date: '2016-06-02T00:00:00', Cur_OfficialRate: 19877.00 },
        { Cur_ID: 145, Date: '2016-06-03T00:00:00', Cur_OfficialRate: 19921.00 },
        { Cur_ID: 145, Date: '2016-06-04T00:00:00', Cur_OfficialRate: 20007.00 },
        { Cur_ID: 145, Date: '2016-06-05T00:00:00', Cur_OfficialRate: 20007.00 },
        { Cur_ID: 145, Date: '2016-06-06T00:00:00', Cur_OfficialRate: 20007.00 },
        { Cur_ID: 145, Date: '2016-06-07T00:00:00', Cur_OfficialRate: 19869.00 },
        { Cur_ID: 145, Date: '2016-06-08T00:00:00', Cur_OfficialRate: 19850.00 },
        { Cur_ID: 145, Date: '2016-06-09T00:00:00', Cur_OfficialRate: 19807.00 },
        { Cur_ID: 145, Date: '2016-06-10T00:00:00', Cur_OfficialRate: 19680.00 },
        { Cur_ID: 145, Date: '2016-06-11T00:00:00', Cur_OfficialRate: 19823.00 },
        { Cur_ID: 145, Date: '2016-06-12T00:00:00', Cur_OfficialRate: 19823.00 },
        { Cur_ID: 145, Date: '2016-06-13T00:00:00', Cur_OfficialRate: 19823.00 },
        { Cur_ID: 145, Date: '2016-06-14T00:00:00', Cur_OfficialRate: 19932.00 },
        { Cur_ID: 145, Date: '2016-06-15T00:00:00', Cur_OfficialRate: 20007.00 },
        { Cur_ID: 145, Date: '2016-06-16T00:00:00', Cur_OfficialRate: 20047.00 },
        { Cur_ID: 145, Date: '2016-06-17T00:00:00', Cur_OfficialRate: 20028.00 },
        { Cur_ID: 145, Date: '2016-06-18T00:00:00', Cur_OfficialRate: 19967.00 },
        { Cur_ID: 145, Date: '2016-06-19T00:00:00', Cur_OfficialRate: 19967.00 },
        { Cur_ID: 145, Date: '2016-06-20T00:00:00', Cur_OfficialRate: 19967.00 },
        { Cur_ID: 145, Date: '2016-06-21T00:00:00', Cur_OfficialRate: 19727.00 },
        { Cur_ID: 145, Date: '2016-06-22T00:00:00', Cur_OfficialRate: 19742.00 },
        { Cur_ID: 145, Date: '2016-06-23T00:00:00', Cur_OfficialRate: 19759.00 },
        { Cur_ID: 145, Date: '2016-06-24T00:00:00', Cur_OfficialRate: 19801.00 },
        { Cur_ID: 145, Date: '2016-06-25T00:00:00', Cur_OfficialRate: 20051.00 },
        { Cur_ID: 145, Date: '2016-06-26T00:00:00', Cur_OfficialRate: 20051.00 },
        { Cur_ID: 145, Date: '2016-06-27T00:00:00', Cur_OfficialRate: 20051.00 },
        { Cur_ID: 145, Date: '2016-06-28T00:00:00', Cur_OfficialRate: 20036.00 },
        { Cur_ID: 145, Date: '2016-06-29T00:00:00', Cur_OfficialRate: 20041.00 },
        { Cur_ID: 145, Date: '2016-06-30T00:00:00', Cur_OfficialRate: 20053.00 },
      ])
    }
  }
}
