import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InvoiceItem } from '../models/invoice-item.model';

@Injectable({
    providedIn: 'root',
})
export class InvoiceService {
    #invoiceItems: BehaviorSubject<InvoiceItem[]> = new BehaviorSubject(
        [] as InvoiceItem[]
    );
    readonly invoiceItems = this.#invoiceItems.asObservable();
    addItems = (items: InvoiceItem[]) => {
        this.#invoiceItems.next(items);
    };
}
