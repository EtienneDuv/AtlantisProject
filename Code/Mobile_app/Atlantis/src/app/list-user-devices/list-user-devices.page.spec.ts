import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserDevicesPage } from './list-user-devices.page';

describe('ListUserDevicesPage', () => {
  let component: ListUserDevicesPage;
  let fixture: ComponentFixture<ListUserDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserDevicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
