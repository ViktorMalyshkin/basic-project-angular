import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { DynamicsModel } from '../models/dynamics.model'
import { ResponseDynamicsModel } from '../models/response/response-dynamics.model'

export const serializeResponseDynamics = ( source: Observable<ResponseDynamicsModel[]> ): Observable<DynamicsModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return { id: item.Cur_ID, date: item.Date, rate: item.Cur_OfficialRate }
      }),
    ),
  )
}
