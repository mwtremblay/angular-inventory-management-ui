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
    FormsModule
  ],
  providers: [WorkOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
