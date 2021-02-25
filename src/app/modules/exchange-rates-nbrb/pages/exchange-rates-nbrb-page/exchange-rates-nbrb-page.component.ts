import {DatePipe} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {PriceModel} from '../../models/price.model'
import {MetalModel} from '../../models/metal.model'
import {RateModel} from '../../models/rate.model'
import {GetCurrencyRates, GetPreciousMetalRates, GetPreciousMetals} from '../../store/actions'
import {selectCurrencyRateList} from '../../store/selectors/currency-rates.selectors'
import {selectPreciousMetalRateList} from '../../store/selectors/precious-metal-rates.selectors'
import {selectPreciousMetalList} from '../../store/selectors/precious-metals.selectors'
import {IExchangeRatesNbrbState} from '../../store/state'

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.scss'],
})
export class ExchangeRatesNbrbPageComponent implements OnInit {
  rates$: Observable<RateModel[]>
  metals$: Observable<MetalModel[]>
  prices$: Observable<PriceModel[]>


  constructor(private _store: Store<IExchangeRatesNbrbState>, private _datePipe: DatePipe) {
    this.rates$ = this._store.select(selectCurrencyRateList)
    this.metals$ = this._store.select(selectPreciousMetalList)
    this.prices$ = this._store.select(selectPreciousMetalRateList)
  }

  ngOnInit(): void {
    this._store.dispatch(new GetPreciousMetals())
    this._store.dispatch(new GetPreciousMetalRates())
    this._store.dispatch(new GetCurrencyRates())
  }
}
