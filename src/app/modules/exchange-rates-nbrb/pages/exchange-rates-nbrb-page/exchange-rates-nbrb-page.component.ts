import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { GetCurrencyRates } from '../../store/actions'
import { selectCurrencyRates } from '../../store/selectors/currency-rates.selectors'
import { IExchangeRatesNbrbState } from '../../store/state'
import { ICurrencyRatesState } from '../../store/state/currency-rates.state'

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.css'],
})
export class ExchangeRatesNbrbPageComponent implements OnInit {
  // currencyFromService$: Observable<IRate[]>
  currency$: Observable<ICurrencyRatesState>


  constructor( private _store: Store<IExchangeRatesNbrbState> ) {
    this.currency$ = this._store.pipe(select(selectCurrencyRates))
  }

  ngOnInit(): void {
    this._store.dispatch(new GetCurrencyRates())
  }

}
