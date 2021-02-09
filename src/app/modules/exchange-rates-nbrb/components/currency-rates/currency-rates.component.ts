import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DISPLAYED_COLUMNS_RATES } from '../../constants/displayed-columns.constants'
import { selectCurrencyRates } from '../../store/selectors/currency-rates.selectors'
import { IExchangeRatesNbrbState } from '../../store/state'
import { ICurrencyRatesState } from '../../store/state/currency-rates.state'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css'],
})
export class CurrencyRatesComponent implements OnInit {
  DISPLAYED_COLUMNS = DISPLAYED_COLUMNS_RATES
  rates$: Observable<ICurrencyRatesState>

  constructor( private _store: Store<IExchangeRatesNbrbState> ) {
    this.rates$ = this._store.pipe(select(selectCurrencyRates))
  }

  ngOnInit(): void {
  }

}
