import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeNameComponent } from './account-change-name.component';

describe('AccountChangeNameComponent', () => {
  let component: AccountChangeNameComponent;
  let fixture: ComponentFixture<AccountChangeNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountChangeNameComponent]
    });
    fixture = TestBed.createComponent(AccountChangeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
