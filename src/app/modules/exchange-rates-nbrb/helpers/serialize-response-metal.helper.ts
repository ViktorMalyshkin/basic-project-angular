import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {MetalModel} from '../models/metal.model'
import {ResponseMetalModel} from '../models/response/response-metal.model'

export const serializeResponseMetals = (source: Observable<ResponseMetalModel[]>): Observable<MetalModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return {
          id: item.Id,
          name: item.Name,
          name_en: item.NameEng,
          name_by: item.NameBel,
        }
      }),
    ),
  )
}
