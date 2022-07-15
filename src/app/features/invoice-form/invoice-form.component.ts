import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
    selector: 'app-invoice-form',
    templateUrl: './invoice-form.component.html',
    styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
    form = new FormGroup({
        items: new FormArray([]),
    });

    constructor(
        private snackBar: MatSnackBar,
        private invoiceService: InvoiceService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.addItem();
    }

    addItem = () => {
        const formGroup = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
            ]),
            count: new FormControl(1, [
                Validators.pattern('^[0-9]*$'),
                Validators.required,
                Validators.min(1),
                Validators.max(100),
            ]),
            price: new FormControl(1, [
                Validators.required,
                Validators.min(1),
                Validators.max(1000000),
                Validators.pattern('^[0-9]*$'),
            ]),
        });
        const formArray = this.form.get('items') as FormArray;
        formArray.push(formGroup);
    };

    removeItem = (index: number) => {
        const formArray = this.form.get('items') as FormArray;
        formArray.removeAt(index);
    };

    submitForm = () => {
        this.form.markAllAsTouched();
        if ((this.form.get('items') as FormArray).length == 0) {
            this.snackBar.open('Please add items', 'Ok');
        } else if (this.form.valid) {
            this.invoiceService.addItems([
                ...(this.form.get('items') as FormArray).value,
            ]);
            this.router.navigate(['preview']);
        }
    };
}
