import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs583Component } from './cs583.component';

describe('Cs583Component', () => {
  let component: Cs583Component;
  let fixture: ComponentFixture<Cs583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
