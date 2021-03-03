import { Route } from '@angular/router'
import { environment } from '../../../../environments/environment'
import { StateResolverGuard } from '../guards/state-resolver.guard'
import { CurrencyRateChartNbrbPageComponent } from '../pages/currency-rate-chart-nbrb-page/currency-rate-chart-nbrb-page.component'
import { E_DYNAMICS_ACTION_TYPES } from '../store/actions/dynamics.actions'

const initialCurrencyChart = environment.initial_currency_chart

export const exchangeRatesNbrbRoutes: Route[] = [
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
]
