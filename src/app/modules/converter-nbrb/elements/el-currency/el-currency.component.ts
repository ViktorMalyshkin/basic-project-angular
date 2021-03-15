import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RateModel } from '../../models/rate.model'

@Component({
  selector: 'app-el-currency',
  templateUrl: './el-currency.component.html',
  styleUrls: ['./el-currency.component.css'],
})
export class ElCurrencyComponent implements OnInit {
  @Input() item: FormGroup
  @Input() formGroupName: any
  @Input() names: RateModel[]

  constructor() { }

  ngOnInit(): void {
  }

}
