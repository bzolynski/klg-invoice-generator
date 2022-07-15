import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-invoice-form-item',
    templateUrl: './invoice-form-item.component.html',
    styleUrls: ['./invoice-form-item.component.scss'],
})
export class InvoiceFormItemComponent {
    @Input() group!: FormGroup;
    @Output() handleDeleteButton = new Subject();

    get nameErrorMessage() {
        const control = this.group.get('name');
        if (control?.errors?.required) return 'Field is required!';
        if (control?.errors?.minlength)
            return `Min length is: ${control.errors?.minlength?.requiredLength}`;
        if (control?.errors?.maxlength)
            return `Max length is: ${control.errors?.maxlength?.requiredLength}`;

        return '';
    }
    get countErrorMessage() {
        const control = this.group.get('count');
        if (control?.errors?.pattern) return `Please enter number!`;
        if (control?.errors?.required) return 'Field is required!';
        if (control?.errors?.min)
            return `Min value is: ${control.errors?.min?.min}`;
        if (control?.errors?.max)
            return `Max value is: ${control.errors?.max?.max}`;

        return '';
    }
    get priceErrorMessage() {
        const control = this.group.get('price');
        if (control?.errors?.pattern) return `Please enter number!`;
        if (control?.errors?.required) return 'Field is required!';
        if (control?.errors?.min)
            return `Min value is: ${control.errors?.min?.min}`;
        if (control?.errors?.max)
            return `Max value is: ${control.errors?.max?.max}`;

        return '';
    }
}
