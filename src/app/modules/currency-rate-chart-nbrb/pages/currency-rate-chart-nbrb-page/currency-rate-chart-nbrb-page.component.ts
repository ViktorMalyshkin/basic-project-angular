import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { environment } from '../../../../../environments/environment'
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
export class CurrencyRateChartNbrbPageComponent implements OnChanges, OnInit {
  dynamics$: Observable<DynamicsState>
  currencies$: Observable<CurrenciesState>
  // TODO check model
  initialCurrencyChart: any

  constructor( private store: Store ) {
    this.initialCurrencyChart = environment.initial_currency_chart
  }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit(): void {
    const receivingDynamics = this._receivingFromServerDynamics()
    const receivingCurrencies = this._receivingFromServerCurrencies()
    debugger
    Promise.all([receivingDynamics, receivingCurrencies]).then(() => {
      debugger
      this.dynamics$ = this.store.select(selectDynamicsState)
      this.currencies$ = this.store.select(selectCurrencyState)
    })
  }

  private async _receivingFromServerDynamics(): Promise<void> {
    await this.store.dispatch(new GetCurrencies())
  }

  private async _receivingFromServerCurrencies(): Promise<void> {
    await this.store.dispatch(new GetDynamics(
      {
        currency: this.initialCurrencyChart.id.toString(),
        startDate: this.initialCurrencyChart.date_start,
        endDate: this.initialCurrencyChart.date_end,
      }))
  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheckghbdtn')
  // }

  paramsEvent( $event: any ): void {
    this.store.dispatch(new GetDynamics($event.value))
  }
}
