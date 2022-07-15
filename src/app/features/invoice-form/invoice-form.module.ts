import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceFormRoutingModule } from './invoice-form-routing.module';
import { InvoiceFormComponent } from './invoice-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InvoiceFormItemModule } from 'src/app/ui/invoice-form-item/invoice-form-item.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        InvoiceFormRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        InvoiceFormItemModule,
        MatSnackBarModule,
    ],
    declarations: [InvoiceFormComponent],
})
export class InvoiceFormModule {}
