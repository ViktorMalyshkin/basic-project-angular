import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrencyModel } from '../models/currency.model'
import { ResponseCurrencyModel } from '../models/response/response-currency.model'

export const serializeResponseCurrencies = ( source: Observable<ResponseCurrencyModel[]> ): Observable<CurrencyModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return {
          id: item.Cur_ID,
          id_parent: item.Cur_ParentID,
          code: item.Cur_Code,
          abbreviation: item.Cur_Abbreviation,
          name: item.Cur_Name,
          name_by: item.Cur_Name_Bel,
          name_en: item.Cur_Name_Eng,
          quot_name: item.Cur_QuotName,
          quot_name_by: item.Cur_QuotName_Bel,
          quot_name_en: item.Cur_QuotName_Eng,
          name_multi: item.Cur_NameMulti,
          name_multi_by: item.Cur_Name_BelMulti,
          name_multi_en: item.Cur_Name_EngMulti,
          scale: item.Cur_Scale,
          periodicity: item.Cur_Periodicity,
          date_start: item.Cur_DateStart,
          date_end: item.Cur_DateEnd,
        }
      }),
    ),
  )
}
