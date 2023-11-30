import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerComponent } from './engineer.component';

describe('EngineerComponent', () => {
  let component: EngineerComponent;
  let fixture: ComponentFixture<EngineerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineerComponent]
    });
    fixture = TestBed.createComponent(EngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
