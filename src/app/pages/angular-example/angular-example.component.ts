import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-angular-example',
  templateUrl: './angular-example.component.html',
  styleUrls: ['./angular-example.component.css'],
})
export class AngularExampleComponent implements OnInit {
  title = 'basic-project-angular'

  constructor() { }

  ngOnInit(): void {
  }

}
