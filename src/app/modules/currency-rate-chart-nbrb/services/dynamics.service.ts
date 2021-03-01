import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { testApiDynamics } from '../data/testApiDynamics'
import { serializeResponseDynamics } from '../helpers/serialize-response-dynamics.helper'
import { DynamicsModel } from '../models/dynamics.model'

@Injectable({
  providedIn: 'root',
})
export class DynamicsService {

  constructor( private _http: HttpClient ) { }

  public getDynamics( currency: any, startDate: any, endDate: any ): Observable<DynamicsModel[]> {
    if (environment.env_name === 'PROD') {
      return this._http.get<DynamicsModel[]>(
        `${ environment.api_url }/ExRates/Rates/Dynamics/${ currency }?startDate=${ startDate }&endDate=${ endDate }`)
        .pipe(serializeResponseDynamics)
    } else {
      // TODO TEPM API
      setTimeout(() => {
        return of(testApiDynamics.filter(( item ) => {
          const date = Number(item.Date.split('T')[ 0 ].split('-').join(''))
          const s = Number(startDate.split('T')[ 0 ].split('-').join(''))
          const e = Number(endDate.split('T')[ 0 ].split('-').join(''))
          return s <= date && date <= e
        })).pipe(serializeResponseDynamics)
      }, 0)
    }
  }
}
