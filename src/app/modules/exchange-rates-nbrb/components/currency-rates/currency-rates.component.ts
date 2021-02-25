import {Component, Input} from '@angular/core'
import {DISPLAYED_COLUMNS_RATES} from '../../constants/displayed-columns.constants'
import {RateModel} from '../../models/rate.model'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.css'],
})
export class CurrencyRatesComponent {
  DISPLAYED_COLUMNS = DISPLAYED_COLUMNS_RATES

  @Input() rates: RateModel[]
}
