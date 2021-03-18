import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder } from '@angular/forms'
import { environment } from '../../../../../environments/environment'
import { RateModel } from '../../models/rate.model'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  rates: RateModel[]
  formGroup = this.fb.group({
    currency: this.fb.array([]),
  })

  @Input()
  set items( rates: RateModel[] ) {
    this.rates = rates
    this.initFormArray(rates)
  }

  get items(): RateModel[] {
    return this.rates
  }

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {}

  get currency(): FormArray {
    return this.formGroup.get('currency') as FormArray
  }

  initFormArray( rates ): void {
    if (this.currency.length === 0) {
      const listOfCurAbbreviations = environment.initial_converter.listOfCurAbbreviations
      const formItems = rates.filter(( item ) => listOfCurAbbreviations.includes(item.abbreviation))
      for (const item of formItems) {
        this.currency.push(
          this.fb.group({
            id: this.fb.control(item.id),
            amount: this.fb.control(this.rounded(item.scale / item.rate)),
            abbreviation: this.fb.control(item.abbreviation),
            scale: this.fb.control(item.scale),
            name: this.fb.control(item.name),
          }),
        )
      }
    }
  }

  addNewCurrency( rate: RateModel ): void {
    const newAmount = this.currency.controls[ 0 ].value.amount // true
    const idOfAmount = rate.id
    const idOfNewAmount = this.currency.controls[ 0 ].value.id // false
    const rateOfNewAmount = this.rates.find(( item ) => item.id === idOfNewAmount).rate
    const scaleOfNewAmount = this.currency.controls[ 0 ].value.scale
    const newCurrentAmount = this.updateAmount(idOfAmount, newAmount, rateOfNewAmount, scaleOfNewAmount)
    this.currency.push(
      this.fb.group({
        id: this.fb.control(rate.id),
        amount: this.fb.control(newCurrentAmount),
        abbreviation: this.fb.control(rate.abbreviation),
        scale: this.fb.control(rate.scale),
        name: this.fb.control(rate.name),
      }),
    )
  }

  deleteCurrency( $event: number ): void {
    this.currency.removeAt($event)
  }

  isRates( rates: RateModel[] ): boolean {
    return rates.length === 0
  }

  rounded( num: number ): number {
    return +num.toFixed(4)
  }

  changeAmountInput( { index, newAmount } ): void {
    const idRate = this.currency.controls[ index ].value.id
    const originalRateItem = this.rates.find(( item ) => item.id === idRate)
    const rateOfNewAmount = originalRateItem.rate
    const scaleOfNewAmount = originalRateItem.scale
    for (const [indexFormItemString, itemFormItem] of this.currency.controls.entries()) {
      if (indexFormItemString !== index) {
        const newCurrentAmount = this.updateAmount(itemFormItem.value.id, newAmount, rateOfNewAmount, scaleOfNewAmount)
        itemFormItem.patchValue({ amount: newCurrentAmount })
      }
    }
  }

  changeNameSelect( $event ): void {
    const originalRateItem = this.rates.find(( item ) => item.name === $event.name)
    const indexFormItem = $event.indexFormItem
    const newAmount = this.currency.controls[ indexFormItem ].value.amount // true
    const idOfAmount = this.rates.find(( item ) => item.name === $event.name).id // false
    const idOfNewAmount = this.currency.controls[ indexFormItem ].value.id // false
    const rateOfNewAmount = this.rates.find(( item ) => item.id === idOfNewAmount).rate
    const scaleOfNewAmount = this.currency.controls[ indexFormItem ].value.scale
    const newCurrentAmount = this.updateAmount(idOfAmount, newAmount, rateOfNewAmount, scaleOfNewAmount)
    this.currency.controls[ indexFormItem ].patchValue({
      id: originalRateItem.id,
      amount: newCurrentAmount,
      abbreviation: originalRateItem.abbreviation,
      scale: originalRateItem.scale,
    })
  }

  updateAmount( id, newAmount, rateOfNewAmount, scaleOfNewAmount ): number {
    const currentRate = this.rates.find(( item ) => item.id === id).rate
    const currentScale = this.rates.find(( item ) => item.id === id).scale
    return this.rounded((newAmount * rateOfNewAmount * currentScale) / (currentRate * scaleOfNewAmount))
  }

  isExist( id ): boolean {
    return !this.currency.controls.find(( item ) => item.value.id === id)
  }
}
