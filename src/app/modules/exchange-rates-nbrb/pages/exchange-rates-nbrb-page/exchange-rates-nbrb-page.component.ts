import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IIngot } from '../../models/ingot.model'
import { IMetal } from '../../models/metal.model'
import { IRate } from '../../models/rate.model'
import { GetCurrencyRates, GetPreciousMetalRates, GetPreciousMetals } from '../../store/actions'
import { selectCurrencyRateList } from '../../store/selectors/currency-rates.selectors'
import { selectPreciousMetalRateList } from '../../store/selectors/precious-metal-rates.selectors'
import { selectPreciousMetalList } from '../../store/selectors/precious-metals.selectors'
import { IExchangeRatesNbrbState } from '../../store/state'
// import { selectPreciousMetalRateList } from '../../store/selectors/precious-metal-rates.selectors'
// import { selectPreciousMetalList } from '../../store/selectors/precious-metals.selectors'

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.scss'],
})
export class ExchangeRatesNbrbPageComponent implements OnInit {
  rates$: Observable<IRate[]>
  metals$: Observable<IMetal[]>
  ingots$: Observable<IIngot[]>


  constructor( private _store: Store<IExchangeRatesNbrbState>, private _datePipe: DatePipe ) {
    this.rates$ = this._store.select(selectCurrencyRateList)
    this.metals$ = this._store.select(selectPreciousMetalList)
    this.ingots$ = this._store.select(selectPreciousMetalRateList)
  }

  ngOnInit(): void {
    this._store.dispatch(new GetPreciousMetals())
    this._store.dispatch(new GetPreciousMetalRates())
    this._store.dispatch(new GetCurrencyRates())
  }
}
