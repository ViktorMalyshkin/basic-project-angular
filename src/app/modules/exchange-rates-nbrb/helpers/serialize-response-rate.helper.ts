import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ResponseRateModel} from '../models/response/response-rate.model'
import {RateModel} from '../models/rate.model'

export const serializeResponseRates = (source: Observable<ResponseRateModel[]>): Observable<RateModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return {
          id: item.Cur_ID,
          date: item.Date,
          abbreviation: item.Cur_Abbreviation,
          scale: item.Cur_Scale,
          name: item.Cur_Name,
          rate: item.Cur_OfficialRate,
        }
      }),
    ),
  )
}
