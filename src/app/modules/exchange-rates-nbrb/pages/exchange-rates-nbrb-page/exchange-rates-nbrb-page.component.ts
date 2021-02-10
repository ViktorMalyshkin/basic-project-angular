import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { GetCurrencyRates, GetPreciousMetals } from '../../store/actions'
import { IExchangeRatesNbrbState } from '../../store/state'
import { ICurrencyRatesState } from '../../store/state/currency-rates.state'

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.css'],
})
export class ExchangeRatesNbrbPageComponent implements OnInit {
  // currencyFromService$: Observable<IRate[]>
  // rates$: Observable<ICurrencyRatesState>


  constructor( private _store: Store<ICurrencyRatesState> ) {}

  ngOnInit(): void {
    this._store.dispatch(new GetCurrencyRates())
    this._store.dispatch(new GetPreciousMetals())
  }

}
