import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrderComponent } from './completed-order.component';

describe('CompletedOrderComponent', () => {
  let component: CompletedOrderComponent;
  let fixture: ComponentFixture<CompletedOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedOrderComponent]
    });
    fixture = TestBed.createComponent(CompletedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
