import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForWordComponent } from './apply-for-word.component';

describe('ApplyForWordComponent', () => {
  let component: ApplyForWordComponent;
  let fixture: ComponentFixture<ApplyForWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
