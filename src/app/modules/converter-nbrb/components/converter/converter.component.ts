import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder } from '@angular/forms'
import { RateModel } from '../../models/rate.model'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {

  @Input() items: RateModel[]

  constructor( private fb: FormBuilder ) { }

  formGroup = this.fb.group({
    currency: this.fb.array([
      this.fb.group({
        rate: this.fb.control(2.0089),
        abbreviation: this.fb.control('AUD'),
        scale: this.fb.control(1),
        name: this.fb.control('Австралийский доллар'),
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

  addNewCurrency(): void {
    this.currency.push(this.fb.control(''))
  }

  ngOnInit(): void {
  }

}
