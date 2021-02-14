import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AngularD3GraphLibModule } from 'angular-d3-graphs'
import { ChartComponent } from './components/chart/chart.component'
import { UiBarGraphComponent } from './elements/ui-bar-graph/ui-bar-graph.component'
import { CurrencyRateChartNbrbPageComponent } from './pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { exchangeRatesNbrbRoutes } from './routes'
import { DynamicsEffects } from './store/effects/dynamics.effects'
import * as fromDynamics from './store/reducers/dynamics.reducer'


@NgModule({
  declarations: [CurrencyRateChartNbrbPageComponent, UiBarGraphComponent, ChartComponent],
  imports: [
    CommonModule,
    AngularD3GraphLibModule,
    StoreModule.forFeature(fromDynamics.DYNAMICS_FEATURE_KEY, fromDynamics.dynamicsReducer),
    EffectsModule.forFeature([DynamicsEffects]),
    RouterModule.forChild(exchangeRatesNbrbRoutes),
  ],
})
export class CurrencyRateChartNbrbModule {}
