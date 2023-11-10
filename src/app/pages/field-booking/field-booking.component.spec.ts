import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBookingComponent } from './field-booking.component';

describe('FieldBookingComponent', () => {
  let component: FieldBookingComponent;
  let fixture: ComponentFixture<FieldBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldBookingComponent]
    });
    fixture = TestBed.createComponent(FieldBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
