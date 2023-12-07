import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicesComponent } from './editservices.component';

describe('EditservicesComponent', () => {
  let component: EditservicesComponent;
  let fixture: ComponentFixture<EditservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditservicesComponent]
    });
    fixture = TestBed.createComponent(EditservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
