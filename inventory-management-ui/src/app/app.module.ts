import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';
import { WorkOrderService } from './workorder-service.service';
import { WorkOrderEditComponent } from './work-order-edit/work-order-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Imports for PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Browser } from 'protractor';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrderListComponent,
    WorkOrderFormComponent,
    WorkOrderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    InputTextModule,
    MenubarModule,
    MenuModule
  ],
  providers: [WorkOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
