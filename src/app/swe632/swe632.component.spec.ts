import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swe632Component } from './swe632.component';

describe('Swe632Component', () => {
  let component: Swe632Component;
  let fixture: ComponentFixture<Swe632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swe632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swe632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
