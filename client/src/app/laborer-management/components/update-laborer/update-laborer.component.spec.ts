import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaborerComponent } from './update-laborer.component';

describe('UpdateLaborerComponent', () => {
  let component: UpdateLaborerComponent;
  let fixture: ComponentFixture<UpdateLaborerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLaborerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLaborerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
