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
      this.fb.group({
        rate: this.fb.control(1),
        abbreviation: this.fb.control('BYN'),
        scale: this.fb.control(1),
        name: this.fb.control('Беларусский рубль'),
      }),
      this.fb.group({
        rate: this.fb.control(2.1),
        abbreviation: this.fb.control('USD'),
        scale: this.fb.control(1),
        name: this.fb.control('Доллар США'),
      }),
    ]),
  })

  get currency(): FormArray {
    return this.formGroup.get('currency') as FormArray
  }

  initFormArray( rates ): FormArray {
    const listOfCurAbbreviations = environment.initial_converter.listOfCurAbbreviations
    const formItems = rates.filter(( item ) => listOfCurAbbreviations.includes(item.abbreviation))
    debugger
    console.log('initFormArray', formItems)

    const arr = []
    do {
      arr.push(
        this.fb.group({
          rate: this.fb.control(2.1),
          abbreviation: this.fb.control('USD'),
          scale: this.fb.control(1),
          name: this.fb.control('Доллар США'),
        }),
      )
      console.log(arr)
    } while (arr.length === 6)
    return null
  }

  addNewCurrency(): void {
    this.currency.push(this.fb.control(''))
  }

  ngOnInit(): void {
    // this.initFormArray(this.items)
  }

}
