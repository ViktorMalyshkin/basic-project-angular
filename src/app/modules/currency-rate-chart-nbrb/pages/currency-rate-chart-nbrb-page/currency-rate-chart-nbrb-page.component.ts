import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IDynamicsModel } from '../../models/dynamics.model'
import { DynamicsService } from '../../services/dynamics.service'

@Component({
  selector: 'app-currency-rate-chart-nbrb-page',
  templateUrl: './currency-rate-chart-nbrb-page.component.html',
  styleUrls: ['./currency-rate-chart-nbrb-page.component.scss'],
})
export class CurrencyRateChartNbrbPageComponent implements OnInit {
  dynamics: Observable<IDynamicsModel[]>

  constructor( private store: Store, private _servise: DynamicsService ) { }

  ngOnInit(): void {
    this.dynamics = this._servise.getDynamics()
  }

}
