import { Component, OnInit } from '@angular/core'
import { dashboardItems } from '../../constants/dashboard-items'
import { DashboardItemsModel } from '../../models/dashboard-items.model'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  items: DashboardItemsModel[] = []

  constructor() {
    this.items = dashboardItems
  }

  ngOnInit(): void {
  }

}
