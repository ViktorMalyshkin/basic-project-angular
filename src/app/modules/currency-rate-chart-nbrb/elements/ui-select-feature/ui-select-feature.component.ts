import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-ui-select-feature',
  templateUrl: './ui-select-feature.component.html',
  styleUrls: ['./ui-select-feature.component.css'],
})
export class UiSelectFeatureComponent implements OnInit {
  animalControl = new FormControl('', Validators.required)
  items: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
