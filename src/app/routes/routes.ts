import { Routes } from '@angular/router'
import { environment } from '../../environments/environment'
import { ConverterPageComponent } from '../modules/converter-nbrb/page/converter-page/converter-page.component'
import { ECurrencyRatesActionTypes } from '../modules/converter-nbrb/store/actions'
import { StateResolverGuard } from '../modules/currency-rate-chart-nbrb/guards/state-resolver.guard'
import { CurrencyRateChartNbrbPageComponent } from '../modules/currency-rate-chart-nbrb/pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { E_DYNAMICS_ACTION_TYPES } from '../modules/currency-rate-chart-nbrb/store/actions/dynamics.actions'
import { ExchangeRatesNbrbPageComponent } from '../modules/exchange-rates-nbrb/pages/exchange-rates-nbrb-page/exchange-rates-nbrb-page.component'
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component'
import { NbrbPageComponent } from '../pages/nbrb-page/nbrb-page.component'
import { StubComponent } from '../pages/stub/stub.component'

const initialCurrencyChart = environment.initial_currency_chart

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'about', component: StubComponent },
  { path: 'exrates-banks', component: StubComponent },
  { path: 'smart-calc', component: StubComponent },
  {
    path: 'nbrb', component: NbrbPageComponent,
    children: [
      { path: 'exrates', component: ExchangeRatesNbrbPageComponent },
      {
        path: 'chart',
        component: CurrencyRateChartNbrbPageComponent,
        resolve: { state: StateResolverGuard },
        data: {
          type: E_DYNAMICS_ACTION_TYPES.GET_DYNAMICS, param: {
            currency: initialCurrencyChart.id.toString(),
            startDate: initialCurrencyChart.date_start,
            endDate: initialCurrencyChart.date_end,
          },
        },
      },
      {
        path: 'converter', component: ConverterPageComponent,
        resolve: { state: StateResolverGuard },
        data: {
          type: ECurrencyRatesActionTypes.GetCurrencyRates
        },
      },
    ],
  },
  { path: '**', redirectTo: '/dashboard' },
]
