import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { CurrencyRateChartNbrbPageComponent } from './pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { exchangeRatesNbrbRoutes } from './routes'
import { DynamicsEffects } from './store/effects/dynamics.effects'
import * as fromDynamics from './store/reducers/dynamics.reducer'


@NgModule({
  declarations: [CurrencyRateChartNbrbPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDynamics.dynamicsFeatureKey, fromDynamics.reducer),
    EffectsModule.forFeature([DynamicsEffects]),
    RouterModule.forChild(exchangeRatesNbrbRoutes),
  ],
})
export class CurrencyRateChartNbrbModule {}
