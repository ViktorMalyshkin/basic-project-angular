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

  dynamicsApiParams: DynamicsApiParamsModel

  @Output() params = new EventEmitter<any>()

  constructor( private _datePipe: DatePipe ) {
    this.hintTitle = 'Currency Code'
    this.dynamicsApiParams = { currency: '', startDate: '', endDate: '' }
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
    this.dynamicsApiParams.currency = $event.value.Description
  }

  selectionStartDateEvent( $event: any ): void {
    this.dynamicsApiParams.startDate = $event.value
  }

  selectionEndDateEvent( $event: any ): void {
    this.dynamicsApiParams.endDate = $event.value
  }

  buildChartEvent( $event: MouseEvent, dynamicsApiParamsModel: DynamicsApiParamsModel ): void {
    alert({event: $event , value: dynamicsApiParamsModel})
    this.params.emit({event: $event , value: dynamicsApiParamsModel})
  }
}
