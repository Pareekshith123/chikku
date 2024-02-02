import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalordersComponent } from './totalorders.component';

describe('TotalordersComponent', () => {
  let component: TotalordersComponent;
  let fixture: ComponentFixture<TotalordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalordersComponent]
    });
    fixture = TestBed.createComponent(TotalordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
