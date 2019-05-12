import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantrihethongComponent } from './quantrihethong.component';

describe('QuantrihethongComponent', () => {
  let component: QuantrihethongComponent;
  let fixture: ComponentFixture<QuantrihethongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantrihethongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantrihethongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
