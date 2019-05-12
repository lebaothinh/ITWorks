import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCvComponent } from './find-cv.component';

describe('FindCvComponent', () => {
  let component: FindCvComponent;
  let fixture: ComponentFixture<FindCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
