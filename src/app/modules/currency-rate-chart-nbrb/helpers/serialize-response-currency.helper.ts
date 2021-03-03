import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrencyModel } from '../models/currency.model'
import { ResponseCurrencyModel } from '../models/response/response-currency.model'

export const serializeResponseCurrencies = ( source: Observable<ResponseCurrencyModel[]> ): Observable<CurrencyModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return {
          id: item.Cur_ID,
          code: item.Cur_Code,
          abbreviation: item.Cur_Abbreviation,
          name: item.Cur_Name,
          name_eng: item.Cur_Name_Eng,
          quot_name: item.Cur_QuotName,
          quot_name_eng: item.Cur_QuotName_Eng,
          date_start: item.Cur_DateStart,
          date_end: item.Cur_DateEnd,
        }
      }),
    ),
  )
}
