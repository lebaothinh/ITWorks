import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemakequestionComponent } from './createmakequestion.component';

describe('CreatemakequestionComponent', () => {
  let component: CreatemakequestionComponent;
  let fixture: ComponentFixture<CreatemakequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemakequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemakequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
