import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLaborerandadminComponent } from './profile-laborerandadmin.component';

describe('ProfileLaborerandadminComponent', () => {
  let component: ProfileLaborerandadminComponent;
  let fixture: ComponentFixture<ProfileLaborerandadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLaborerandadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLaborerandadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
