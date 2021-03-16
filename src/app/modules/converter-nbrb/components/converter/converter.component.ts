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

  @Input() tempRates: RateModel[]


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
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < formItems.length; i++) {
        this.currency.push(
          this.fb.group({
            id: this.fb.control(formItems[ i ].id),
            rate: this.fb.control(formItems[ i ].rate),
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
        rate: this.fb.control(0),
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

  changeRateInput( $event ): void { // {index, newRate}
    const currentDifferent = this.findDifference($event.index, $event.newRate)
    const different = this.rounded(currentDifferent)
    this.changeValueInputs($event.index, different)
  }

  findDifference( index: number, newRate: number ): number {
    const rate = this.currency.controls[ index ].value
    const currentRate = this.rates.find(( item ) => item.id === rate.id).rate
    return rate.scale * newRate / currentRate
  }

  rounded( num: number ): number {
    return +num.toFixed(4)
  }

  changeValueInputs( index: number, different: number ): void {
    for (const currencyKey in this.currency.controls) {
      const key = Number(currencyKey)
      if (key !== index) {
        const rate = this.currency.controls[ key ].value ///
        const currentRate = this.rates.find(( item ) => item.id === rate.id).rate
        console.log(currentRate)
        const newRate = this.rounded(currentRate * different)
        this.currency.controls[ key ].patchValue({ rate: newRate})
      } else {
        console.log(currencyKey)
      }

    }

  }
}
