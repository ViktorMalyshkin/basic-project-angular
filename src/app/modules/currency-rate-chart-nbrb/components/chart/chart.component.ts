import { DatePipe } from '@angular/common'
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { UiDatepickerComponent } from '../../elements/ui-datepicker/ui-datepicker.component'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrencyForChartModel } from '../../models/currency.model'
import { DynamicsApiParamsModel } from '../../models/dynamics-api-params.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent {
  titleChart = 'Currency Rate Chart NBRB'
  hintTitle = 'Currency Code'
  @Input() currenciesForChart: CurrencyForChartModel[]
  @Input() chartData: ChartDataModel[]
  isDisabledDatepicker = true
  isDisabledButton = true
  curDateStart: Date
  curDateEnd: Date
  dynamicsApiParams: DynamicsApiParamsModel = { currency: null, startDate: null, endDate: null }

  @Output() params = new EventEmitter<any>()
  private currency: string | null = null
  private startDate: string | null = null
  private endDate: string | null = null
  @Input() initialCurrencyChart: any

  @ViewChild(UiDatepickerComponent) childDatepicker: UiDatepickerComponent

  constructor( private _datePipe: DatePipe ) {}

  initSelectedStartValue( dataSelect ): void {
    this.selectionCurrencyEvent(this.initialCurrencyChart.id, dataSelect)
    this.isDisabledButton = true
  }

  selectionCurrencyEvent( value, currenciesForChart ): void {
    this.currency = value
    if (value && currenciesForChart.length !== 0) {
      const selectedCurrency = currenciesForChart.find(item => item.id === value)
      this.curDateStart = new Date(selectedCurrency.date_start)
      const today = new Date()
      const dateEnd = new Date(selectedCurrency.date_end)
      today < dateEnd ? this.curDateEnd = today : this.curDateEnd = dateEnd
      this.checkIsDisabledDatepicker()
      this.resetDate()
    } else {
      this.checkIsDisabledDatepicker()
    }
  }

  selectionStartDateEvent( value: any ): void {
    this.startDate = this._datePipe.transform(value.value, 'yyyy-MM-dd')
    this.checkIsDisabledButton()
  }

  selectionEndDateEvent( value: any ): void {
    this.endDate = this._datePipe.transform(value.value, 'yyyy-MM-dd')
    this.checkIsDisabledButton()
  }

  checkIsDisabledDatepicker(): void {
    this.isDisabledDatepicker = this.currency === null
  }

  checkIsDisabledButton(): void {
    this.isDisabledButton = !(this.currency !== null && this.startDate !== null && this.endDate !== null)
  }

  buildChartEvent( $event: MouseEvent ): void {
    this.dynamicsApiParams = {
      currency: this.currency,
      startDate: this.startDate,
      endDate: this.endDate,
    }
    this.params.emit({ event: $event, value: this.dynamicsApiParams })
    this.cleaningDynamicsApiParams()
    this.isDisabledButton = true
  }

  cleaningDynamicsApiParams(): void {
    this.selectionStartDateEvent({ value: null })
    this.selectionEndDateEvent({ value: null })
  }

  resetDate(): void {
    this.childDatepicker?.resetDateRangeInput()
    this.startDate = null
    this.endDate = null
  }


  buildChartBasedParams( $event ): void {
    this.chartData = []
    this.startDate = this._datePipe.transform($event.startDate, 'yyyy-MM-dd')
    this.endDate = this._datePipe.transform($event.endDate, 'yyyy-MM-dd')
    this.dynamicsApiParams = {
      currency: this.currency,
      startDate: this.startDate,
      endDate: this.endDate,
    }
    this.params.emit({ event: $event, value: this.dynamicsApiParams })
    this.cleaningDynamicsApiParams()
  }

  isDataChart( chartData ): boolean {
    return chartData.length === 0
  }
}
