import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGraphPage } from './display-graph.page';

describe('DisplayGraphPage', () => {
  let component: DisplayGraphPage;
  let fixture: ComponentFixture<DisplayGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGraphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
