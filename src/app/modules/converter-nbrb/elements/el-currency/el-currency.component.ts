import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
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
  @Input() currencyForm: FormArray
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

  changeSelect( $event, id, index ): void {
    this.changeNameSelect.emit({ name: $event.value, id, indexFormItem: index })
  }

  isExist( id ): boolean {
    return !this.currencyForm.controls.find(( item ) => item.value.id === id)
  }

  isCheckCurrencyFormForLengthOfTwo(): boolean {
    return this.currencyForm.controls.length === 2
  }
}
