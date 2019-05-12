import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvShortcutComponent } from './cv-shortcut.component';

describe('CvShortcutComponent', () => {
  let component: CvShortcutComponent;
  let fixture: ComponentFixture<CvShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
