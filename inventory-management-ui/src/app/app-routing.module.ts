import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';
import { WorkOrderEditComponent } from './work-order-edit/work-order-edit.component';

const routes: Routes = [
  { path: 'workOrders', component: WorkOrderListComponent },
  { path: 'addWorkOrders', component: WorkOrderFormComponent },
  { path: 'editWorkOrder/:id', component: WorkOrderEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
