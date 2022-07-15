import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormItemComponent } from './invoice-form-item.component';

describe('InvoiceFormItemComponent', () => {
  let component: InvoiceFormItemComponent;
  let fixture: ComponentFixture<InvoiceFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
