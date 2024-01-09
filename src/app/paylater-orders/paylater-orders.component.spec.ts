import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylaterOrdersComponent } from './paylater-orders.component';

describe('PaylaterOrdersComponent', () => {
  let component: PaylaterOrdersComponent;
  let fixture: ComponentFixture<PaylaterOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaylaterOrdersComponent]
    });
    fixture = TestBed.createComponent(PaylaterOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
