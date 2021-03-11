import { ChartDataModel } from './chart-data.model'
import { CurrencyForChartModel } from './currency.model'

export interface ChartDataAndCurrenciesModel {
  chartData: ChartDataModel[]
  currenciesForChart: CurrencyForChartModel[]
}
