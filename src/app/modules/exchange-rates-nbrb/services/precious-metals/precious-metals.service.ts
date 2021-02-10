import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { IMetal } from '../../models/metal.model'

@Injectable({
  providedIn: 'root',
})
export class PreciousMetalsService {

  constructor( private _http: HttpClient ) { }

  public getPreciousMetals(): Observable<IMetal[]> {
    if (environment.env_name !== 'PROD') {
      return this._http.get<IMetal[]>(`${environment.api_url}/metals`)
    } else {
      return of([
        {
          Id: 0,
          Name: 'Золото',
          NameBel: 'Золата',
          NameEng: 'Gold',
        },
        {
          Id: 1,
          Name: 'Серебро',
          NameBel: 'Серабро',
          NameEng: 'Silver',
        },
        {
          Id: 2,
          Name: 'Платина',
          NameBel: 'Плаціна',
          NameEng: 'Platinum',
        },
        {
          Id: 3,
          Name: 'Палладий',
          NameBel: 'Паладый',
          NameEng: 'Palladium',
        },
      ])
    }
  }
}
