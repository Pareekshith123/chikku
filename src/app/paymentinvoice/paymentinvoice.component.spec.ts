import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinvoiceComponent } from './paymentinvoice.component';

describe('PaymentinvoiceComponent', () => {
  let component: PaymentinvoiceComponent;
  let fixture: ComponentFixture<PaymentinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentinvoiceComponent]
    });
    fixture = TestBed.createComponent(PaymentinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
