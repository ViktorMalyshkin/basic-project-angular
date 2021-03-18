import { DatePipe } from '@angular/common'
import { createSelector } from '@ngrx/store'
import { ChartDataAndCurrenciesModel } from '../../models/chart-data-and-currencies.model'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrencyForChartModel, CurrencyModel } from '../../models/currency.model'
import { DynamicsModel } from '../../models/dynamics.model'
import { ICurrenciesState } from '../reducers/currency.reducer'
import { IDynamicsState } from '../reducers/dynamics.reducer'
import { selectCurrencyState } from './currency.selectors'
import { selectDynamicsState } from './dynamics.selectors'

export const selectChartDataAndCurrencies = createSelector(
  selectDynamicsState,
  selectCurrencyState,
  ( iDynamicsState: IDynamicsState, iCurrenciesState: ICurrenciesState ): ChartDataAndCurrenciesModel => {
    return {
      chartData: iDynamicsState.dynamics.map(( item: DynamicsModel ): ChartDataModel => {
        return {
          xAxis: new DatePipe(`en-US`).transform(item.date, 'MM/dd'),
          yAxis: item.rate,
        }
      }),
      currenciesForChart: iCurrenciesState.currencies.map(( item: CurrencyModel ): CurrencyForChartModel => {
        return {
          id: item.id,
          name_en: item.name_en,
          date_start: item.date_start,
          date_end: item.date_end,
        }
      }),
    }
  },
)
