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

  // Temp
  @Input()
  set tempRates( rates: RateModel[] ) {
    this.rates = rates
    this.initFormArray(rates)
  }

  get tempRates(): RateModel[] {
    return this.rates
  }

  // TODO
  @Input()
  set items( rates: RateModel[] ) {
    // this.rates = rates
    // this.initFormArray(rates)
  }

  get items(): RateModel[] {
    // return this.rates
    return null
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
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < formItems.length; i++) {
        this.currency.push(
          this.fb.group({
            id: this.fb.control(formItems[ i ].id),
            amount: this.fb.control(this.rounded(1 * formItems[ i ].scale / formItems[ i ].rate)),
            abbreviation: this.fb.control(formItems[ i ].abbreviation),
            scale: this.fb.control(formItems[ i ].scale),
            name: this.fb.control(formItems[ i ].name),
          }),
        )
      }
    }
  }

  addNewCurrency(): void {
    this.currency.push(
      this.fb.group({
        id: this.fb.control(''),
        amount: this.fb.control(0),
        abbreviation: this.fb.control(''),
        scale: this.fb.control(0),
        name: this.fb.control(''),
      }),
    )
  }

  deleteCurrency( $event: number ): void {
    this.currency.removeAt($event)
  }

  isRates(): boolean {
    return this.rates.length === 0
  }

  rounded( num: number ): number {
    return +num.toFixed(4)
  }

  changeAmountInput( { index, newAmount } ): void {
    const idRate = this.currency.controls[ index ].value.id
    const originalRateItem = this.rates.find(( item ) => item.id === idRate)
    const rateOfNewAmount = originalRateItem.rate
    const scaleOfNewAmount = originalRateItem.scale
    for (const indexFormItemString in this.currency.controls) {
      const indexFormItem = Number(indexFormItemString)
      if (indexFormItem !== index) {
        const id = this.currency.controls[ indexFormItem ].value.id
        const newCurrentAmount = this.updateAmount(id,  newAmount, rateOfNewAmount, scaleOfNewAmount)
        this.currency.controls[ indexFormItem ].patchValue({ amount: newCurrentAmount })
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

  updateAmount(id, newAmount, rateOfNewAmount, scaleOfNewAmount): number {
    const currentRate = this.rates.find(( item ) => item.id === id).rate
    const currentScale = this.rates.find(( item ) => item.id === id).scale
    return this.rounded((newAmount * rateOfNewAmount * currentScale) / (currentRate * scaleOfNewAmount))
  }
}
