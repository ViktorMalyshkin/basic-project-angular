import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { environment } from '../../../../../environments/environment'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrencyForChartModel } from '../../models/currency.model'
import { ChartDataAndCurrenciesModel } from '../../models/chart-data-and-currencies.model'
import { GetDynamics } from '../../store/actions/dynamics.actions'
import { selectChartDataAndCurrencies } from '../../store/selectors/index.selectors'

@Component({
  selector: 'app-currency-rate-chart-nbrb-page',
  templateUrl: './currency-rate-chart-nbrb-page.component.html',
  styleUrls: ['./currency-rate-chart-nbrb-page.component.scss'],
})
export class CurrencyRateChartNbrbPageComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>()
  public chartData: ChartDataModel[] = []
  public currenciesForChart: CurrencyForChartModel[] = []
  initialCurrencyChart: any

  constructor( private _store: Store ) {
    this.initialCurrencyChart = environment.initial_currency_chart
  }

  ngOnInit(): void {
    this._store.pipe(
      select(selectChartDataAndCurrencies),
      takeUntil(this._destroy$),
    ).subscribe(( chartDataAndCurrencies: ChartDataAndCurrenciesModel ) => {
      this.chartData = chartDataAndCurrencies.chartData
      this.currenciesForChart = chartDataAndCurrencies.currenciesForChart
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next()
    this._destroy$.complete()
  }

  paramsEvent( $event: any ): void {
    this._store.dispatch(new GetDynamics($event.value))
  }
}
