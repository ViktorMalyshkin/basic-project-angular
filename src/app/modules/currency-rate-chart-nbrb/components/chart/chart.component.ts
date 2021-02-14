import { Component, Input, OnInit } from '@angular/core'
import { IDynamicsModel } from '../../models/dynamics.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() dynamics: IDynamicsModel[]
  data = [{
    id: '1',
    data: [{ x: 2, y: 3 }],
  }]

  constructor() { }

  ngOnInit(): void {
  }
}
