import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployershortcutComponent } from './employershortcut.component';

describe('EmployershortcutComponent', () => {
  let component: EmployershortcutComponent;
  let fixture: ComponentFixture<EmployershortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployershortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployershortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
