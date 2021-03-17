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
  tempRates: RateModel[]

  constructor( private _store: Store ) {
    // this.rates$ = this._store.select(selectCurrencyRateList)
    this.tempRates = [
      {
        id: 1,
        date: '2021-03-16T00:00:00',
        abbreviation: 'BYN',
        scale: 1,
        name: 'Беларусский рубль',
        rate: 1
      },
      {
        id: 170,
        date: '2021-03-16T00:00:00',
        abbreviation: 'AUD',
        scale: 1,
        name: 'Австралийский доллар',
        rate: 2.0102
      },
      {
        id: 191,
        date: '2021-03-16T00:00:00',
        abbreviation: 'BGN',
        scale: 1,
        name: 'Болгарский лев',
        rate: 1.5819
      },
      {
        id: 290,
        date: '2021-03-16T00:00:00',
        abbreviation: 'UAH',
        scale: 100,
        name: 'Гривен',
        rate: 9.3869
      },
      {
        id: 291,
        date: '2021-03-16T00:00:00',
        abbreviation: 'DKK',
        scale: 10,
        name: 'Датских крон',
        rate: 4.1600
      },
      {
        id: 145,
        date: '2021-03-16T00:00:00',
        abbreviation: 'USD',
        scale: 1,
        name: 'Доллар США',
        rate: 2.5940
      },
      {
        id: 292,
        date: '2021-03-16T00:00:00',
        abbreviation: 'EUR',
        scale: 1,
        name: 'Евро',
        rate: 3.0947
      },
      {
        id: 293,
        date: '2021-03-16T00:00:00',
        abbreviation: 'PLN',
        scale: 10,
        name: 'Злотых',
        rate: 6.7523
      },
      {
        id: 355,
        date: '2021-03-16T00:00:00',
        abbreviation: 'JPY',
        scale: 100,
        name: 'Иен',
        rate: 2.3775
      },
      {
        id: 303,
        date: '2021-03-16T00:00:00',
        abbreviation: 'IRR',
        scale: 100000,
        name: 'Иранских риалов',
        rate: 6.1762
      },
      {
        id: 294,
        date: '2021-03-16T00:00:00',
        abbreviation: 'ISK',
        scale: 100,
        name: 'Исландских крон',
        rate: 2.0156
      },
      {
        id: 23,
        date: '2021-03-16T00:00:00',
        abbreviation: 'CAD',
        scale: 1,
        name: 'Канадский доллар',
        rate: 2.0829
      },
      {
        id: 304,
        date: '2021-03-16T00:00:00',
        abbreviation: 'CNY',
        scale: 10,
        name: 'Китайских юаней',
        rate: 3.9912
      },
      {
        id: 72,
        date: '2021-03-16T00:00:00',
        abbreviation: 'KWD',
        scale: 1,
        name: 'Кувейтский динар',
        rate: 8.5860
      },
      {
        id: 296,
        date: '2021-03-16T00:00:00',
        abbreviation: 'MDL',
        scale: 10,
        name: 'Молдавских леев',
        rate: 1.4727
      },
      {
        id: 286,
        date: '2021-03-16T00:00:00',
        abbreviation: 'NZD',
        scale: 1,
        name: 'Новозеландский доллар',
        rate: 1.8672
      },
      {
        id: 297,
        date: '2021-03-16T00:00:00',
        abbreviation: 'NOK',
        scale: 10,
        name: 'Норвежских крон',
        rate: 3.0732
      },
      {
        id: 298,
        date: '2021-03-16T00:00:00',
        abbreviation: 'RUB',
        scale: 100,
        name: 'Российских рублей',
        rate: 3.5453
      },
      {
        id: 299,
        date: '2021-03-16T00:00:00',
        abbreviation: 'XDR',
        scale: 1,
        name: 'СДР (Специальные права заимствования)',
        rate: 3.7048
      },
      {
        id: 119,
        date: '2021-03-16T00:00:00',
        abbreviation: 'SGD',
        scale: 1,
        name: 'Сингапурcкий доллар',
        rate: 1.9284
      },
      {
        id: 300,
        date: '2021-03-16T00:00:00',
        abbreviation: 'KGS',
        scale: 100,
        name: 'Сомов',
        rate: 3.0580
      },
      {
        id: 301,
        date: '2021-03-16T00:00:00',
        abbreviation: 'KZT',
        scale: 1000,
        name: 'Тенге',
        rate: 6.1887
      },
      {
        id: 302,
        date: '2021-03-16T00:00:00',
        abbreviation: 'TRY',
        scale: 10,
        name: 'Турецких лир',
        rate: 3.4573
      },
      {
        id: 143,
        date: '2021-03-16T00:00:00',
        abbreviation: 'GBP',
        scale: 1,
        name: 'Фунт стерлингов',
        rate: 3.6145
      },
      {
        id: 305,
        date: '2021-03-16T00:00:00',
        abbreviation: 'CZK',
        scale: 100,
        name: 'Чешских крон',
        rate: 11.8156
      },
      {
        id: 306,
        date: '2021-03-16T00:00:00',
        abbreviation: 'SEK',
        scale: 10,
        name: 'Шведских крон',
        rate: 3.0392
      },
      {
        id: 130,
        date: '2021-03-16T00:00:00',
        abbreviation: 'CHF',
        scale: 1,
        name: 'Швейцарский франк',
        rate: 2.7910
      }
    ]
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
