import { DatePipe } from '@angular/common'
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrensyObjectModel } from '../../models/currensy.model'
import { DynamicsApiParamsModel } from '../../models/dynamics-api-params.model'
import { DynamicsObjectModel } from '../../models/dynamics.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() dynamics: DynamicsObjectModel
  @Input() currencies: CurrensyObjectModel
  dataChart: ChartDataModel[]
  dataSelect: any[]
  hintTitle: string
  isDisabledDatepicker = true
  isDisabledButton = true
  curDateStart: Date
  curDateEnd: Date

  dynamicsApiParams: DynamicsApiParamsModel

  @Output() params = new EventEmitter<any>()

  constructor( private _datePipe: DatePipe ) {
    this.hintTitle = 'Currency Code'
    this.dynamicsApiParams = { currency: null, startDate: null, endDate: null }
  }


  ngOnChanges(): void {
    this.dataChart = this.dynamics.dynamics.map(( item ) => {
      return { xAxis: this._datePipe.transform(item.Date, 'MM/dd'), yAxis: item.Cur_OfficialRate }
    })
    this.dataSelect = this.currencies.currencies.map(( item ) => {
      return { Name: item.Cur_QuotName, Description: item.Cur_ID, Cur_DateStart: item.Cur_DateStart, Cur_DateEnd: item.Cur_DateEnd }
    })
  }

  ngOnInit(): void {
  }

  selectionCurrencyEvent( $event ): void {
    if ($event.value) {
      this.dynamicsApiParams.currency = $event.value.Description
      this.curDateStart = new Date($event.value.Cur_DateStart)
      this.curDateEnd = new Date($event.value.Cur_DateEnd)
      this.checkIsDisabledDatepicker()
    } else {
      this.dynamicsApiParams.currency = null
      this.checkIsDisabledDatepicker()
    }
  }

  selectionStartDateEvent( $event: any ): void {
    this.dynamicsApiParams.startDate = this._datePipe.transform($event.value, 'yyyy-MM-dd')
    this.checkIsDisabledButton()
  }

  selectionEndDateEvent( $event: any ): void {
    this.dynamicsApiParams.endDate = this._datePipe.transform($event.value, 'yyyy-MM-dd')
    this.checkIsDisabledButton()
  }

  checkIsDisabledButton(): void {
    this.isDisabledButton = !(this.dynamicsApiParams.startDate !== null && this.dynamicsApiParams.endDate !== null)
  }

  checkIsDisabledDatepicker(): void {
    this.isDisabledDatepicker = this.dynamicsApiParams.currency === null
  }

  buildChartEvent( $event: MouseEvent, dynamicsApiParams: DynamicsApiParamsModel ): void {
    this.params.emit({ event: $event, value: dynamicsApiParams })
  }
}
