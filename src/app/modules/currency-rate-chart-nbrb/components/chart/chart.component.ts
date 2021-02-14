import { DatePipe } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ChartDataModel } from '../../models/chart-data.model'
import { CurrensyObjectModel } from '../../models/currensy.model'
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

  constructor( private _datePipe: DatePipe ) {}

  ngOnInit(): void {
    this.dataChart = this.dynamics.dynamics.map(( item ) => {
      return { xAxis: this._datePipe.transform(item.Date, 'MM/dd'), yAxis: item.Cur_OfficialRate }
    })
    this.dataSelect = this.currencies.currencies.map(( item ) => {
      return { Name: item.Cur_QuotName, Description: item.Cur_Code }
    })
  }
}
