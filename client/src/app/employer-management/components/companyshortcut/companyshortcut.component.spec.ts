import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyshortcutComponent } from './companyshortcut.component';

describe('CompanyshortcutComponent', () => {
  let component: CompanyshortcutComponent;
  let fixture: ComponentFixture<CompanyshortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyshortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyshortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
