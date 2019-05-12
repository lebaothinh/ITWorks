import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptSendemailComponent } from './accept-sendemail.component';

describe('AcceptSendemailComponent', () => {
  let component: AcceptSendemailComponent;
  let fixture: ComponentFixture<AcceptSendemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptSendemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptSendemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
