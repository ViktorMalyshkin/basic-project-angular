import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { MetalModel } from '../../models/metal.model'
import {serializeResponseMetals} from '../../helpers/serialize-response-metal.helper'
import {ResponseMetalModel} from '../../models/response/response-metal.model'

@Injectable({
  providedIn: 'root',
})
export class PreciousMetalsService {

  constructor( private _http: HttpClient ) { }

  public getPreciousMetals(): Observable<MetalModel[]> {
      return this._http.get<ResponseMetalModel[]>(`${environment.api_url}/metals`).pipe(serializeResponseMetals)
  }
}
