import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSliderModule } from '@angular/material/slider'
// import { MatSliderModule } from '@angular/material/slider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AngularD3GraphLibModule } from 'angular-d3-graphs'
import { ChartComponent } from './components/chart/chart.component'
import { UiBarGraphComponent } from './elements/ui-bar-graph/ui-bar-graph.component'
import { UiDatepickerComponent } from './elements/ui-datepicker/ui-datepicker.component'
import { UiSelectFeatureComponent } from './elements/ui-select-feature/ui-select-feature.component'
import { CurrencyRateChartNbrbPageComponent } from './pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { exchangeRatesNbrbRoutes } from './routes'
import { CurrencyEffects } from './store/effects/currency.effects'
import { DynamicsEffects } from './store/effects/dynamics.effects'
import * as fromCurrency from './store/reducers/currency.reducer'
import * as fromDynamics from './store/reducers/dynamics.reducer'

@NgModule({
  declarations: [CurrencyRateChartNbrbPageComponent, UiBarGraphComponent, ChartComponent, UiSelectFeatureComponent, UiDatepickerComponent],
  imports: [
    CommonModule,
    AngularD3GraphLibModule,
    StoreModule.forFeature(fromDynamics.DYNAMICS_FEATURE_KEY, fromDynamics.dynamicsReducer),
    StoreModule.forFeature(fromCurrency.CURRENCIES_FEATURE_KEY, fromCurrency.currenciesReducer),
    EffectsModule.forFeature([DynamicsEffects, CurrencyEffects]),
    RouterModule.forChild(exchangeRatesNbrbRoutes),
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  providers: [
    // MatNativeDateModule,
    // MatMomentDateModule,
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class CurrencyRateChartNbrbModule {}
