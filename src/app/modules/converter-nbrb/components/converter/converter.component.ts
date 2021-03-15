import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {

  @Input() items: any

  constructor( private fb: FormBuilder ) { }

  form = this.fb.group({
    currency: this.fb.array([
      this.fb.control(4),
      this.fb.control(5),
    ]),
  })

  get currency(): FormArray {
    return this.form.get('currency') as FormArray
  }

  addNewCurrency(): void {
    this.currency.push(this.fb.control(''))
  }

  ngOnInit(): void {
  }

}
