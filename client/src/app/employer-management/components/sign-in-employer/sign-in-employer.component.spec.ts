import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInEmployerComponent } from './sign-in-employer.component';

describe('SignInEmployerComponent', () => {
  let component: SignInEmployerComponent;
  let fixture: ComponentFixture<SignInEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
