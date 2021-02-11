import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { DynamicsService } from '../../services/dynamics.service'
import { GetDynamics } from '../../store/actions/dynamics.actions'
import { DynamicsState } from '../../store/reducers/dynamics.reducer'
import { selectDynamicsState } from '../../store/selectors/dynamics.selectors'

@Component({
  selector: 'app-currency-rate-chart-nbrb-page',
  templateUrl: './currency-rate-chart-nbrb-page.component.html',
  styleUrls: ['./currency-rate-chart-nbrb-page.component.scss'],
})
export class CurrencyRateChartNbrbPageComponent implements OnInit {
  // dynamics: Observable<IDynamicsModel[]>
  dynamics$: Observable<DynamicsState>
  currency = 145
  startDate = '2016-6-2'
  endDate = '2016-6-30'

  constructor( private store: Store, private _servise: DynamicsService ) {
    this.dynamics$ = this.store.select(selectDynamicsState)
  }

  ngOnInit(): void {
    // this.dynamics = this._servise.getDynamics()
    this.store.dispatch(new GetDynamics({ currency: this.currency, startDate: this.startDate, endDate: this.endDate }))
  }

}
