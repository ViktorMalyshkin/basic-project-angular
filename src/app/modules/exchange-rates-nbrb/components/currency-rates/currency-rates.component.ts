import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DISPLAYED_COLUMNS_RATES } from '../../constants/displayed-columns.constants'
import { IRate } from '../../models/rate.model'
import { selectCurrencyRateList } from '../../store/selectors/currency-rates.selectors'
import { ICurrencyRatesState } from '../../store/state/currency-rates.state'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css'],
})
export class CurrencyRatesComponent implements OnInit {
  DISPLAYED_COLUMNS = DISPLAYED_COLUMNS_RATES

  @Input() rates: IRate[]
  constructor( private _store: Store ) {}

  ngOnInit(): void {
  }
}
