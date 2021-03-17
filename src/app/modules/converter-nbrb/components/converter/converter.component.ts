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
    for (const keyString in this.currency.controls) {
      const key = Number(keyString)
      if (key !== index) {
        const rate = this.currency.controls[ key ].value
        const currentRate = this.rates.find(( item ) => item.id === rate.id).rate
        const currentScale = this.rates.find(( item ) => item.id === rate.id).scale
        const newCurrentAmount = this.rounded((newAmount * rateOfNewAmount * currentScale) / (currentRate * scaleOfNewAmount))
        this.currency.controls[ key ].patchValue({ amount: newCurrentAmount })
      }
    }
  }


  changeNameSelect( { name, idOldItem, indexFormItems } ): void {
    debugger
    console.log(this.currency.controls[ indexFormItems ].value)
    // найти
    const id = this.currency.controls[ indexFormItems ].value.id
    const rateItem = this.rates.find(( item ) => item.id === idOldItem)

    debugger

    // const currentId = this.currency.controls[ index ].value.id
    // const originalRateItem = this.rates.find(( item ) => item.id === currentId)

    this.currency.controls[ indexFormItems ].patchValue({
      id: rateItem.id,
      amount: 555,
      abbreviation: rateItem.abbreviation,
      scale: rateItem.scale,
    })
  }
}
