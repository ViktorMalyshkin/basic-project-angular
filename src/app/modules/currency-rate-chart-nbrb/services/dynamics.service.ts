import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { serializeResponseDynamics } from '../helpers/serialize-response-dynamics.helper'
import { DynamicsModel } from '../models/dynamics.model'

@Injectable({
  providedIn: 'root',
})
export class DynamicsService {

  constructor( private _http: HttpClient ) { }

  public getDynamics( currency: any, startDate: any, endDate: any ): Observable<DynamicsModel[]> {
      return this._http.get<DynamicsModel[]>(
        `${ environment.api_url }/ExRates/Rates/Dynamics/${ currency }?startDate=${ startDate }&endDate=${ endDate }`)
        .pipe(serializeResponseDynamics)
  }
}
