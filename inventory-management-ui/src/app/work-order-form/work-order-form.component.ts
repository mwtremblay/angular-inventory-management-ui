import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../work-order';
import { WorkOrderService } from '../workorder-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-order-form',
  templateUrl: './work-order-form.component.html',
  styleUrls: ['./work-order-form.component.css']
})
export class WorkOrderFormComponent {

  workorder: WorkOrder;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private woService: WorkOrderService

  ) { this.workorder = new WorkOrder(); }

  onSubmit(){
    this.woService.save(this.workorder).subscribe(result => this.gotoWOList());
  }

  gotoWOList(){
    this.router.navigate(['/workOrders']);
  }
}
