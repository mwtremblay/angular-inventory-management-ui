import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';

const routes: Routes = [
  { path: 'workOrders', component: WorkOrderListComponent },
  { path: 'addWorkOrders', component: WorkOrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
