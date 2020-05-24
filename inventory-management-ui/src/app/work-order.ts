import { logging } from 'protractor';

export class WorkOrder {
   id: number;
   woname: string;
    wodescription: string;
    wodueDate: Date;
    wocreationDate: Date;
    assetNumber: number;
}
