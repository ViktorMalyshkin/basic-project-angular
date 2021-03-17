import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RateModel } from '../../models/rate.model'

@Component({
  selector: 'app-el-currency',
  templateUrl: './el-currency.component.html',
  styleUrls: ['./el-currency.component.css'],
})
export class ElCurrencyComponent implements OnInit {
  isActive = false
  @Input() item: FormGroup
  @Input() index: number
  @Input() names: RateModel[]
  @Output() delete = new EventEmitter<any>()
  @Output() changeAmountInput = new EventEmitter<any>()
  @Output() changeNameSelect = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteCurrency( index: number ): void {
    this.delete.emit(index)
  }

  changeInput( $event: number, index: number, isActive: boolean ): void {
    if (isActive) {
      this.changeAmountInput.emit({ index, newAmount: $event })
    }
  }

  isFocusIn( $event ): void {
    this.isActive = true
  }

  isFocusOut( $event ): void {
    this.isActive = false
  }

  changeSelect( $event, id: number, index: number ): void {
    debugger
    this.changeNameSelect.emit({name: $event, id, index})
  }
}
