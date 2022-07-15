import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePreviewRoutingModule } from './invoice-preview-routing.module';
import { InvoicePreviewComponent } from './invoice-preview.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [CommonModule, InvoicePreviewRoutingModule, MatDividerModule],
    declarations: [InvoicePreviewComponent],
})
export class InvoicePreviewModule {}
