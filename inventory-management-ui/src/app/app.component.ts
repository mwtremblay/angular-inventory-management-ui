import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  mitems: MenuItem[];


  constructor() {
    this.title = 'Inventory Management Service';
  }

  ngOnInit(){
    this.mitems = [
      {label: 'Work Order',  routerLink: ['/workOrders']},
      {label: 'Asset'}
    ];

  }
}
