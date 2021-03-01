import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {PriceModel} from '../models/price.model'
import {ResponsePriceModel} from '../models/response/response-price.model'

export const serializeResponsePrices = (source: Observable<ResponsePriceModel[]>): Observable<PriceModel[]> => {
  return source.pipe(
    map(items => items.map(item => {
        return {
          id: item.MetalID,
          date: item.Date,
          nominal: item.Nominal,
          no_cert_dollars: item.NoCertificateDollars,
          no_cert_rubles: item.NoCertificateRubles,
          cert_dollars: item.CertificateDollars,
          cert_rubles: item.CertificateRubles,
          banks_dollars: item.BanksDollars,
          banks_rubles: item.BanksRubles,
          entities_dollars: item.EntitiesDollars,
          entities_rubles: item.EntitiesRubles,
        }
      }),
    ),
  )
}
