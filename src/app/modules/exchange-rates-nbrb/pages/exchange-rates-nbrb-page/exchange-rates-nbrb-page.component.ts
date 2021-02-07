import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Rate } from '../../models/rate.model'
import { CurrencyRatesService } from '../../services'
import { LoadCurrencyRates } from '../../store/actions/currency/currency-rates.actions'
import { selectCurrencyRatesState } from '../../store/selectors/currency.selectors'
import { ICurrencyState } from '../../store/state'

@Component({
  selector: 'app-exchange-rates-nbrb-page',
  templateUrl: './exchange-rates-nbrb-page.component.html',
  styleUrls: ['./exchange-rates-nbrb-page.component.css'],
})
export class ExchangeRatesNbrbPageComponent implements OnInit {
  currencyFromService$: Observable<Rate[]>
  currency$: Observable<ICurrencyState> = this._store.pipe(select(selectCurrencyRatesState))
  displayedColumns = ['Cur_ID',
    'Date',
    'Cur_Abbreviation',
    'Cur_Scale',
    'Cur_Name',
    'Cur_OfficialRate']

  constructor( private _store: Store, private service: CurrencyRatesService ) {
    this.currencyFromService$ = service.getCurrency()
  }

  ngOnInit(): void {
    this._store.dispatch(new LoadCurrencyRates())
  }

}
