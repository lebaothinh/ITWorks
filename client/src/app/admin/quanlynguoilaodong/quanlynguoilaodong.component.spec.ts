import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynguoilaodongComponent } from './quanlynguoilaodong.component';

describe('QuanlynguoilaodongComponent', () => {
  let component: QuanlynguoilaodongComponent;
  let fixture: ComponentFixture<QuanlynguoilaodongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlynguoilaodongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynguoilaodongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
