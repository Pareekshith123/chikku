import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubcategoryComponent } from './editsubcategory.component';

describe('EditsubcategoryComponent', () => {
  let component: EditsubcategoryComponent;
  let fixture: ComponentFixture<EditsubcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsubcategoryComponent]
    });
    fixture = TestBed.createComponent(EditsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
