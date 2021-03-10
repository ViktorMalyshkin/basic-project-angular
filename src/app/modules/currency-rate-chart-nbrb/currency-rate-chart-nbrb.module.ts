import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSliderModule } from '@angular/material/slider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AngularD3GraphLibModule } from 'angular-d3-graphs'
import { ChartComponent } from './components/chart/chart.component'
import { CurrencyChartDirective } from './directive/currency-chart.directive'
import { UiButtonToggleComponent } from './elements/ui-button-toggle/ui-button-toggle.component'
import { UiDatepickerComponent } from './elements/ui-datepicker/ui-datepicker.component'
import { UiSelectFeatureComponent } from './elements/ui-select-feature/ui-select-feature.component'
import { CurrencyRateChartNbrbPageComponent } from './pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { MODULE_EFFECTS } from './store/effects'
import * as fromCurrency from './store/reducers/currency.reducer'
import * as fromDynamics from './store/reducers/dynamics.reducer'

@NgModule({
  declarations: [CurrencyRateChartNbrbPageComponent, ChartComponent, UiSelectFeatureComponent, UiDatepickerComponent,
    CurrencyChartDirective,
    UiButtonToggleComponent],
  imports: [
    CommonModule,
    AngularD3GraphLibModule,
    StoreModule.forFeature(fromDynamics.DYNAMICS_FEATURE_KEY, fromDynamics.dynamicsReducer),
    StoreModule.forFeature(fromCurrency.CURRENCIES_FEATURE_KEY, fromCurrency.currenciesReducer),
    EffectsModule.forFeature(MODULE_EFFECTS),
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
    MatButtonToggleModule,
  ],
  providers: [],
})
export class CurrencyRateChartNbrbModule {}
