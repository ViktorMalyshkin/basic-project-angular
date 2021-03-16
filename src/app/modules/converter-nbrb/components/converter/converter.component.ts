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

  formGroup = this.fb.group({
    currency: this.fb.array([
    ]),
  })

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
    this.currency.push(this.fb.control(''))
  }

  ngOnInit(): void {
    // this.initFormArray(this.tempRates)
  }

}
