import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateDevicesPage } from './associate-devices.page';

describe('AssociateDevicesPage', () => {
  let component: AssociateDevicesPage;
  let fixture: ComponentFixture<AssociateDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateDevicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
