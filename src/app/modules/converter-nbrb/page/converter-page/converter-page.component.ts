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

  constructor( private _store: Store ) {
    this.rates$ = this._store.select(selectCurrencyRateList)
  }

  ngOnInit(): void {}
}
