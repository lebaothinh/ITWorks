import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployershortcutdetailComponent } from './employershortcutdetail.component';

describe('EmployershortcutdetailComponent', () => {
  let component: EmployershortcutdetailComponent;
  let fixture: ComponentFixture<EmployershortcutdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployershortcutdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployershortcutdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
