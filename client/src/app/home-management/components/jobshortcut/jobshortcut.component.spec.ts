import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobshortcutComponent } from './jobshortcut.component';

describe('JobshortcutComponent', () => {
  let component: JobshortcutComponent;
  let fixture: ComponentFixture<JobshortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobshortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobshortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
