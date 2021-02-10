import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { IRate } from '../../models/rate.model'

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {

  constructor( private http: HttpClient ) { }

  // TODO getCurrencyRates
  public getCurrencyRates(): Observable<IRate[]> {
    if (environment.env_name !== 'PROD') {
      const _params = new HttpParams({ fromObject: { periodicity: '0' } })
      return this.http.get<IRate[]>(`${environment.api_url}/exrates/rates`, { params: _params })
    } else {
      return of(
        [
          {
            Cur_ID: 170,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'AUD',
            Cur_Scale: 1,
            Cur_Name: 'Австралийский доллар',
            Cur_OfficialRate: 2.0106,
          },
          {
            Cur_ID: 191,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'BGN',
            Cur_Scale: 1,
            Cur_Name: 'Болгарский лев',
            Cur_OfficialRate: 1.6096,
          },
          {
            Cur_ID: 290,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'UAH',
            Cur_Scale: 100,
            Cur_Name: 'Гривен',
            Cur_OfficialRate: 9.4022,
          },
          {
            Cur_ID: 291,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'DKK',
            Cur_Scale: 10,
            Cur_Name: 'Датских крон',
            Cur_OfficialRate: 4.2331,
          },
          {
            Cur_ID: 145,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'USD',
            Cur_Scale: 1,
            Cur_Name: 'Доллар США',
            Cur_OfficialRate: 2.5997,
          },
          {
            Cur_ID: 292,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'EUR',
            Cur_Scale: 1,
            Cur_Name: 'Евро',
            Cur_OfficialRate: 3.1422,
          },
          {
            Cur_ID: 293,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'PLN',
            Cur_Scale: 10,
            Cur_Name: 'Злотых',
            Cur_OfficialRate: 7.0316,
          },
          {
            Cur_ID: 355,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'JPY',
            Cur_Scale: 100,
            Cur_Name: 'Иен',
            Cur_OfficialRate: 2.4860,
          },
          {
            Cur_ID: 303,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'IRR',
            Cur_Scale: 100000,
            Cur_Name: 'Иранских риалов',
            Cur_OfficialRate: 6.1898,
          },
          {
            Cur_ID: 294,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'ISK',
            Cur_Scale: 100,
            Cur_Name: 'Исландских крон',
            Cur_OfficialRate: 2.0403,
          },
          {
            Cur_ID: 23,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'CAD',
            Cur_Scale: 1,
            Cur_Name: 'Канадский доллар',
            Cur_OfficialRate: 2.0441,
          },
          {
            Cur_ID: 304,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'CNY',
            Cur_Scale: 10,
            Cur_Name: 'Китайских юаней',
            Cur_OfficialRate: 4.0407,
          },
          {
            Cur_ID: 72,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'KWD',
            Cur_Scale: 1,
            Cur_Name: 'Кувейтский динар',
            Cur_OfficialRate: 8.5946,
          },
          {
            Cur_ID: 296,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'MDL',
            Cur_Scale: 10,
            Cur_Name: 'Молдавских леев',
            Cur_OfficialRate: 1.4813,
          },
          {
            Cur_ID: 286,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'NZD',
            Cur_Scale: 1,
            Cur_Name: 'Новозеландский доллар',
            Cur_OfficialRate: 1.8840,
          },
          {
            Cur_ID: 297,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'NOK',
            Cur_Scale: 10,
            Cur_Name: 'Норвежских крон',
            Cur_OfficialRate: 3.0708,
          },
          {
            Cur_ID: 298,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'RUB',
            Cur_Scale: 100,
            Cur_Name: 'Российских рублей',
            Cur_OfficialRate: 3.5103,
          },
          {
            Cur_ID: 299,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'XDR',
            Cur_Scale: 1,
            Cur_Name: 'СДР (Специальные права заимствования)',
            Cur_OfficialRate: 3.7325,
          },
          {
            Cur_ID: 119,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'SGD',
            Cur_Scale: 1,
            Cur_Name: 'Сингапурcкий доллар',
            Cur_OfficialRate: 1.9589,
          },
          {
            Cur_ID: 300,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'KGS',
            Cur_Scale: 100,
            Cur_Name: 'Сомов',
            Cur_OfficialRate: 3.0649,
          },
          {
            Cur_ID: 301,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'KZT',
            Cur_Scale: 1000,
            Cur_Name: 'Тенге',
            Cur_OfficialRate: 6.2166,
          },
          {
            Cur_ID: 302,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'TRY',
            Cur_Scale: 10,
            Cur_Name: 'Турецких лир',
            Cur_OfficialRate: 3.6677,
          },
          {
            Cur_ID: 143,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'GBP',
            Cur_Scale: 1,
            Cur_Name: 'Фунт стерлингов',
            Cur_OfficialRate: 3.5826,
          },
          {
            Cur_ID: 305,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'CZK',
            Cur_Scale: 100,
            Cur_Name: 'Чешских крон',
            Cur_OfficialRate: 12.2356,
          },
          {
            Cur_ID: 306,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'SEK',
            Cur_Scale: 10,
            Cur_Name: 'Шведских крон',
            Cur_OfficialRate: 3.1114,
          },
          {
            Cur_ID: 130,
            Date: '2021-02-10T00:00:00',
            Cur_Abbreviation: 'CHF',
            Cur_Scale: 1,
            Cur_Name: 'Швейцарский франк',
            Cur_OfficialRate: 2.9092,
          },
        ],
      )
    }

  }
}
