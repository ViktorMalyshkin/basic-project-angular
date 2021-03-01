import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.sass'],
})
export class AppBarComponent implements OnInit {
  title = 'CurAnal'

  @ViewChild('button') isActive: ElementRef

  constructor() {
    console.log('isActive', this.isActive)
  }

  ngOnInit(): void {
  }

}
