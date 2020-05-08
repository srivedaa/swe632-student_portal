import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs550Component } from './cs550.component';

describe('Cs550Component', () => {
  let component: Cs550Component;
  let fixture: ComponentFixture<Cs550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
