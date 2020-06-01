import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../work-order';
import { WorkOrderService } from '../workorder-service.service';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.css']
})
export class WorkOrderListComponent implements OnInit {

  workorders: WorkOrder[];
  stringifiedData: any;
  parsedJSON: any;
  cols: any[];

  constructor(private workOrderService: WorkOrderService) {

  }

  ngOnInit() {
    this.workOrderService.findAll().subscribe(data => {
      this.stringifiedData = JSON.stringify(data);
      this.parsedJSON = JSON.parse(this.stringifiedData);
      this.workorders = this.parsedJSON._embedded.workOrders;
      console.log(this.workorders);

      this.cols = [
      {field: 'woname', header: 'Name' },
      {field: 'wodescription', header: 'Description'},
      {field: 'wodueDate', header: 'Due Date'},
      {field: 'wocreationDate', header: 'Creation Date'},
      {field: 'assetNumber', header: 'Asset Number'}
    ];
    });
  }


  deleteWorkOrder(id: number){
    this.workOrderService.delete(id).subscribe(
      data => {
        console.log('Delete Called');
        console.log('id is ', id);
        console.log(data);
        // this.workOrderService.findAll();
        this.ngOnInit();
      }

    );
  }

  editWorkOrder(id: number){


    this.workOrderService.getWO(id);
    console.log(id);
  }


}
