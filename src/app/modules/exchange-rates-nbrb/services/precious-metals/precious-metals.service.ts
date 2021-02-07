import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IMetal } from '../../models/metal.model'

@Injectable({
  providedIn: 'root',
})
export class PreciousMetalsService {

  constructor() { }

  public getPreciousMetals(): Observable<IMetal[]> {
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
