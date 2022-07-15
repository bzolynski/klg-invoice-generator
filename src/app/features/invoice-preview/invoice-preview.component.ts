import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/models/company.model';
import { InvoiceItem } from 'src/app/models/invoice-item.model';
import { CompanyService } from 'src/app/services/company.service';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
    selector: 'app-invoice-preview',
    templateUrl: './invoice-preview.component.html',
    styleUrls: ['./invoice-preview.component.scss'],
})
export class InvoicePreviewComponent {
    vm$ = combineLatest([
        this.invoiceService.invoiceItems,
        this.companyService.getCompany(),
    ]).pipe(map(([items, company]) => ({ items, company })));

    constructor(
        private invoiceService: InvoiceService,
        private companyService: CompanyService
    ) {}

    getSum = (items: InvoiceItem[]): number => {
        return items.reduce((prev, curr) => prev + curr.count * curr.price, 0);
    };
}
