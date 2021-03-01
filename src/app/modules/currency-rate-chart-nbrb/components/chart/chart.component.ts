import { DatePipe } from '@angular/common'
import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core'
import { UiDatepickerComponent } from '../../elements/ui-datepicker/ui-datepicker.component'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrencyObjectModel } from '../../models/currency.model'
import { DynamicsApiParamsModel } from '../../models/dynamics-api-params.model'
import { DynamicsObjectModel } from '../../models/dynamics.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {
  @Input() dynamics: DynamicsObjectModel
  @Input() currencies: CurrencyObjectModel
  dataChart: ChartDataModel[]
  dataSelect: any
  hintTitle: string
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

  constructor( private _datePipe: DatePipe ) {
    this.hintTitle = 'Currency Code'
  }

  ngOnChanges(): void {
    // Todo есть проблемы проверить через setTimeOut
    // debugger
    this.dataSelect = this.currencies?.currencies.map(( item ) => {
      return { id: item.id, name: item.quot_name, date_start: item.date_start, date_end: item.date_end }
    })
    this.dataChart = this.dynamics?.dynamics.map(( item ) => {
      return { xAxis: this._datePipe.transform(item.date, 'MM/dd'), yAxis: item.rate }
    })
  }

  ngDoCheck(): void {
    // debugger
    // this.dataChart = this.dynamics.dynamics.map(( item ) => {
    //   return { xAxis: this._datePipe.transform(item.date, 'MM/dd'), yAxis: item.rate }
    // })
    // this.dataSelect = this.currencies.currencies.map(( item ) => {
    //   return { id: item.id, name: item.quot_name, date_start: item.date_start, date_end: item.date_end }
    // })
  }

  ngOnInit(): void {
    // this.initSelectedStartValue(dataSelect)
    // const promise1 = new Promise(( resolve, reject ) => {
    //   const dataSelect = this.currencies.currencies.map(( item ) => {
    //     return { id: item.id, name: item.quot_name, date_start: item.date_start, date_end: item.date_end }
    //   })
    //   debugger
    //   resolve(dataSelect)
    // })
    // promise1.then(( dataSelect ) => {
    //   debugger
    //   this.dataSelect = dataSelect
    // }).then(( dataSelect ) => {
    //   this.initSelectedStartValue(dataSelect)
    // })
    // // debugger
    // this.dataChart = this.dynamics?.dynamics.map(( item ) => {
    //   return { xAxis: this._datePipe.transform(item.date, 'MM/dd'), yAxis: item.rate }
    // })
    // // this.dataSelect = this.currencies.currencies.map(( item ) => {
    // //   return { id: item.id, name: item.quot_name, date_start: item.date_start, date_end: item.date_end }
    // // })
    // // this.initSelectedStartValue()
  }

  ngAfterViewInit(): void{
    this.dataSelect = this.currencies.currencies.map(( item ) => {
      return { id: item.id, name: item.quot_name, date_start: item.date_start, date_end: item.date_end }
    })
    this.initSelectedStartValue(this.dataSelect)
  }

  initSelectedStartValue( dataSelect ): void {
    this.selectionCurrencyEvent(this.initialCurrencyChart.id, dataSelect)
    this.isDisabledButton = true
  }

  selectionCurrencyEvent( value, dataSelect ): void {
    if (value && this.dataSelect.length !== 0) {
      const selectedCurrency = dataSelect.find(item => item.id === value)
      this.currency = selectedCurrency.id.toString()
      // debugger
      this.curDateStart = new Date(selectedCurrency.date_start)
      const today = new Date()
      const dateEnd = new Date(selectedCurrency.date_end)
      today < dateEnd ? this.curDateEnd = today : this.curDateEnd = dateEnd
      this.checkIsDisabledDatepicker()
      this.resetDate()
    } else {
      // debugger
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
    this.isDisabledButton = !(this.startDate !== null && this.endDate !== null)
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

  // TODO
  cleaningDynamicsApiParams(): void {
    this.selectionStartDateEvent({ value: null })
    this.selectionEndDateEvent({ value: null })
  }

  resetDate(): void {
    this.childDatepicker?.resetDateRangeInput()
  }
}
