import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevicesPage } from './user-devices.page';

describe('UserDevicesPage', () => {
  let component: UserDevicesPage;
  let fixture: ComponentFixture<UserDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDevicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
