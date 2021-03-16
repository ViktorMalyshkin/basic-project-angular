import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { RateModel } from '../../models/rate.model'
import { selectCurrencyRateList } from '../../store/selectors/currency-rates.selectors'

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.css'],
})
export class ConverterPageComponent implements OnInit {
  rates$: Observable<RateModel[]>
  tempRates: [
    {
      'Cur_ID': 1,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'BYN',
      'Cur_Scale': 1,
      'Cur_Name': 'Беларусский рубль',
      'Cur_OfficialRate': 1
    },
    {
      'Cur_ID': 170,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'AUD',
      'Cur_Scale': 1,
      'Cur_Name': 'Австралийский доллар',
      'Cur_OfficialRate': 2.0102
    },
    {
      'Cur_ID': 191,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'BGN',
      'Cur_Scale': 1,
      'Cur_Name': 'Болгарский лев',
      'Cur_OfficialRate': 1.5819
    },
    {
      'Cur_ID': 290,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'UAH',
      'Cur_Scale': 100,
      'Cur_Name': 'Гривен',
      'Cur_OfficialRate': 9.3869
    },
    {
      'Cur_ID': 291,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'DKK',
      'Cur_Scale': 10,
      'Cur_Name': 'Датских крон',
      'Cur_OfficialRate': 4.1600
    },
    {
      'Cur_ID': 145,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'USD',
      'Cur_Scale': 1,
      'Cur_Name': 'Доллар США',
      'Cur_OfficialRate': 2.5940
    },
    {
      'Cur_ID': 292,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'EUR',
      'Cur_Scale': 1,
      'Cur_Name': 'Евро',
      'Cur_OfficialRate': 3.0947
    },
    {
      'Cur_ID': 293,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'PLN',
      'Cur_Scale': 10,
      'Cur_Name': 'Злотых',
      'Cur_OfficialRate': 6.7523
    },
    {
      'Cur_ID': 355,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'JPY',
      'Cur_Scale': 100,
      'Cur_Name': 'Иен',
      'Cur_OfficialRate': 2.3775
    },
    {
      'Cur_ID': 303,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'IRR',
      'Cur_Scale': 100000,
      'Cur_Name': 'Иранских риалов',
      'Cur_OfficialRate': 6.1762
    },
    {
      'Cur_ID': 294,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'ISK',
      'Cur_Scale': 100,
      'Cur_Name': 'Исландских крон',
      'Cur_OfficialRate': 2.0156
    },
    {
      'Cur_ID': 23,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'CAD',
      'Cur_Scale': 1,
      'Cur_Name': 'Канадский доллар',
      'Cur_OfficialRate': 2.0829
    },
    {
      'Cur_ID': 304,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'CNY',
      'Cur_Scale': 10,
      'Cur_Name': 'Китайских юаней',
      'Cur_OfficialRate': 3.9912
    },
    {
      'Cur_ID': 72,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'KWD',
      'Cur_Scale': 1,
      'Cur_Name': 'Кувейтский динар',
      'Cur_OfficialRate': 8.5860
    },
    {
      'Cur_ID': 296,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'MDL',
      'Cur_Scale': 10,
      'Cur_Name': 'Молдавских леев',
      'Cur_OfficialRate': 1.4727
    },
    {
      'Cur_ID': 286,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'NZD',
      'Cur_Scale': 1,
      'Cur_Name': 'Новозеландский доллар',
      'Cur_OfficialRate': 1.8672
    },
    {
      'Cur_ID': 297,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'NOK',
      'Cur_Scale': 10,
      'Cur_Name': 'Норвежских крон',
      'Cur_OfficialRate': 3.0732
    },
    {
      'Cur_ID': 298,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'RUB',
      'Cur_Scale': 100,
      'Cur_Name': 'Российских рублей',
      'Cur_OfficialRate': 3.5453
    },
    {
      'Cur_ID': 299,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'XDR',
      'Cur_Scale': 1,
      'Cur_Name': 'СДР (Специальные права заимствования)',
      'Cur_OfficialRate': 3.7048
    },
    {
      'Cur_ID': 119,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'SGD',
      'Cur_Scale': 1,
      'Cur_Name': 'Сингапурcкий доллар',
      'Cur_OfficialRate': 1.9284
    },
    {
      'Cur_ID': 300,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'KGS',
      'Cur_Scale': 100,
      'Cur_Name': 'Сомов',
      'Cur_OfficialRate': 3.0580
    },
    {
      'Cur_ID': 301,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'KZT',
      'Cur_Scale': 1000,
      'Cur_Name': 'Тенге',
      'Cur_OfficialRate': 6.1887
    },
    {
      'Cur_ID': 302,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'TRY',
      'Cur_Scale': 10,
      'Cur_Name': 'Турецких лир',
      'Cur_OfficialRate': 3.4573
    },
    {
      'Cur_ID': 143,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'GBP',
      'Cur_Scale': 1,
      'Cur_Name': 'Фунт стерлингов',
      'Cur_OfficialRate': 3.6145
    },
    {
      'Cur_ID': 305,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'CZK',
      'Cur_Scale': 100,
      'Cur_Name': 'Чешских крон',
      'Cur_OfficialRate': 11.8156
    },
    {
      'Cur_ID': 306,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'SEK',
      'Cur_Scale': 10,
      'Cur_Name': 'Шведских крон',
      'Cur_OfficialRate': 3.0392
    },
    {
      'Cur_ID': 130,
      'Date': '2021-03-16T00:00:00',
      'Cur_Abbreviation': 'CHF',
      'Cur_Scale': 1,
      'Cur_Name': 'Швейцарский франк',
      'Cur_OfficialRate': 2.7910
    }
  ]

  constructor( private _store: Store ) {
    this.rates$ = this._store.select(selectCurrencyRateList)
  }

  ngOnInit(): void {}

  // ngOnInit(): void {
  //   this._store.pipe(
  //     select(selectChartDataAndCurrencies),
  //     takeUntil(this._destroy$),
  //   ).subscribe(( chartDataAndCurrencies: ChartDataAndCurrenciesModel ) => {
  //     this.chartData = chartDataAndCurrencies.chartData
  //     this.currenciesForChart = chartDataAndCurrencies.currenciesForChart
  //   })
  // }
  //
  // ngOnDestroy(): void {
  //   this._destroy$.next()
  //   this._destroy$.complete()
  // }
}
