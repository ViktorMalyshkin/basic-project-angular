import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RateModel } from '../../models/rate.model'

@Component({
  selector: 'app-el-currency',
  templateUrl: './el-currency.component.html',
  styleUrls: ['./el-currency.component.css'],
})
export class ElCurrencyComponent implements OnInit {
  @Input() item: FormGroup
  @Input() index: number
  @Input() names: RateModel[]
  @Output() delete = new EventEmitter<any>()
  @Output() changeRateInput = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteCurrency( index: number ): void {
    this.delete.emit(index)
  }

  changeInput( $event: number, index: number ): void {
    this.changeRateInput.emit({ index, newRate: $event })
  }
}
