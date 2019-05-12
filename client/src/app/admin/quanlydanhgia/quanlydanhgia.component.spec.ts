import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydanhgiaComponent } from './quanlydanhgia.component';

describe('QuanlydanhgiaComponent', () => {
  let component: QuanlydanhgiaComponent;
  let fixture: ComponentFixture<QuanlydanhgiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlydanhgiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
