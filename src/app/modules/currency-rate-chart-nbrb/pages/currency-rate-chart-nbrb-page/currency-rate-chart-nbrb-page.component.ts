import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DynamicsService } from '../../services/dynamics.service'
import { GetCurrencies } from '../../store/actions/currency.actions'
import { GetDynamics } from '../../store/actions/dynamics.actions'
import { CurrenciesState } from '../../store/reducers/currency.reducer'
import { DynamicsState } from '../../store/reducers/dynamics.reducer'
import { selectCurrencyState } from '../../store/selectors/currency.selectors'
import { selectDynamicsState } from '../../store/selectors/dynamics.selectors'

@Component({
  selector: 'app-currency-rate-chart-nbrb-page',
  templateUrl: './currency-rate-chart-nbrb-page.component.html',
  styleUrls: ['./currency-rate-chart-nbrb-page.component.scss'],
})
export class CurrencyRateChartNbrbPageComponent implements OnInit {
  dynamics$: Observable<DynamicsState>
  currencies$: Observable<CurrenciesState>
  currency = '145'
  startDate = '2016-06-02T00:00:00'
  endDate = '2016-06-30T00:00:00'
  // selectionCurrency: any

  constructor( private store: Store, private _servise: DynamicsService ) {
    this.dynamics$ = this.store.select(selectDynamicsState)
    this.currencies$ = this.store.select(selectCurrencyState)
  }

  ngOnInit(): void {
    this.store.dispatch(new GetDynamics({ currency: this.currency, startDate: this.startDate, endDate: this.endDate }))
    this.store.dispatch(new GetCurrencies())
  }

  // selectionCurrencyEvent( $event: any ): void {
  //   this.selectionCurrency = $event.value
  //   this.currency = $event.value.description
  //   console.log($event.value.description)
  // }
  paramsEvent( $event: any ): void {
    // alert(JSON.stringify($event.value))
    this.store.dispatch(new GetDynamics($event.value))
  }
}
