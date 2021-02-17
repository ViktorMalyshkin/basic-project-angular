import { DatePipe } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrensyObjectModel } from '../../models/currensy.model'
import { DynamicsApiParamsModel } from '../../models/dynamics-api-params.model'
import { DynamicsObjectModel } from '../../models/dynamics.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() dynamics: DynamicsObjectModel
  @Input() currencies: CurrensyObjectModel
  dataChart: ChartDataModel[]
  dataSelect: any[]
  hintTitle: string
  isDisabledDatepicker = true
  isDisabledButton = true

  dynamicsApiParams: DynamicsApiParamsModel

  @Output() params = new EventEmitter<any>()

  constructor( private _datePipe: DatePipe ) {
    this.hintTitle = 'Currency Code'
    this.dynamicsApiParams = { currency: null, startDate: null, endDate: null }
  }

  ngOnInit(): void {
    this.dataChart = this.dynamics.dynamics.map(( item ) => {
      return { xAxis: this._datePipe.transform(item.Date, 'MM/dd'), yAxis: item.Cur_OfficialRate }
    })
    this.dataSelect = this.currencies.currencies.map(( item ) => {
      return { Name: item.Cur_QuotName, Description: item.Cur_Code }
    })
  }

  selectionCurrencyEvent( $event ): void {
    this.dynamicsApiParams.currency = $event.value ? $event.value.Description : null
    this.checkIsDisabledDatepicker()
  }

  selectionStartDateEvent( $event: any ): void {
    this.dynamicsApiParams.startDate = $event.value
    this.checkIsDisabledButton()
  }

  selectionEndDateEvent( $event: any ): void {
    this.dynamicsApiParams.endDate = $event.value
    this.checkIsDisabledButton()
  }

  buildChartEvent( $event: MouseEvent, dynamicsApiParamsModel: DynamicsApiParamsModel ): void {
    alert({ event: $event, value: dynamicsApiParamsModel })
    this.params.emit({ event: $event, value: dynamicsApiParamsModel })
  }

  checkIsDisabledButton(): void {
    this.isDisabledButton = !(this.dynamicsApiParams.startDate !== null && this.dynamicsApiParams.endDate !== null)
  }

  checkIsDisabledDatepicker(): void {
    this.isDisabledDatepicker = !!this.dynamicsApiParams.currency !== null
  }
}
