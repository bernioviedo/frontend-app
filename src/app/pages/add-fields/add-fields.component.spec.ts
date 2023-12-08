import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldsComponent } from './add-fields.component';

describe('AddFieldsComponent', () => {
  let component: AddFieldsComponent;
  let fixture: ComponentFixture<AddFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFieldsComponent]
    });
    fixture = TestBed.createComponent(AddFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
