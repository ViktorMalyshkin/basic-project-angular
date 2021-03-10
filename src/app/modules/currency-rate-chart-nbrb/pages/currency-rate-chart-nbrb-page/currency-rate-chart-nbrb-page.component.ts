import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { environment } from '../../../../../environments/environment'
import { CurrencyModel } from '../../models/currency.model'
import { DynamicsCurrencyModel } from '../../models/dynamics-currency.model'
import { DynamicsModel } from '../../models/dynamics.model'
import { GetDynamics } from '../../store/actions/dynamics.actions'
import { selectDynamicsCurrencies } from '../../store/selectors/index.selectors'

@Component({
  selector: 'app-currency-rate-chart-nbrb-page',
  templateUrl: './currency-rate-chart-nbrb-page.component.html',
  styleUrls: ['./currency-rate-chart-nbrb-page.component.scss'],
})
export class CurrencyRateChartNbrbPageComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>()
  public dynamics: DynamicsModel[] = []
  public currencies: CurrencyModel[] = []
  initialCurrencyChart: any

  constructor( private _store: Store ) {
    this.initialCurrencyChart = environment.initial_currency_chart
  }

  ngOnInit(): void {
    this._store.pipe(
      select(selectDynamicsCurrencies),
      takeUntil(this._destroy$),
    ).subscribe(( dynamicsCurrency: DynamicsCurrencyModel ) => {
      this.currencies = dynamicsCurrency.currencies
      this.dynamics = dynamicsCurrency.dynamics
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
