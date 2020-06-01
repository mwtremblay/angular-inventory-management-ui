import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkOrder } from './work-order';
import { Observable } from 'rxjs';

@Injectable()
export class WorkOrderService {

  private woURL: string;

  constructor(private http: HttpClient) {
    this.woURL = 'http://localhost:8080/api/workOrders';
  }

  public findAll(): Observable<WorkOrder[]> {
    return this.http.get<WorkOrder[]>(this.woURL);
}

  public save(workorder: WorkOrder) {
    return this.http.post<WorkOrder>(this.woURL, workorder);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.woURL}/${id}`, { responseType: 'text' });

  }

  public update(id: number, value: any): Observable<any>{
    console.log('Update Service Called');
    console.log('ID received', id);
    console.log('Value recevied', value);
    return this.http.put(`${this.woURL}/${id}`, value);
  }

  public getWO(id: number): Observable<any>{
    return this.http.get(`${this.woURL}/${id}`);
  }
}
