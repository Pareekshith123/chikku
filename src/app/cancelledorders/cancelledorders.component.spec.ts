import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledordersComponent } from './cancelledorders.component';

describe('CancelledordersComponent', () => {
  let component: CancelledordersComponent;
  let fixture: ComponentFixture<CancelledordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledordersComponent]
    });
    fixture = TestBed.createComponent(CancelledordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
