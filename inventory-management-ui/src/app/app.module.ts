import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';
import { WorkOrderService } from './workorder-service.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkOrderListComponent,
    WorkOrderFormComponent
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
