import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplyCompanyComponent } from './manage-apply-company.component';

describe('ManageApplyCompanyComponent', () => {
  let component: ManageApplyCompanyComponent;
  let fixture: ComponentFixture<ManageApplyCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApplyCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApplyCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
