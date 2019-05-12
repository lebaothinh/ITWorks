import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlynhatuyendungComponent } from './quanlynhatuyendung.component';

describe('QuanlynhatuyendungComponent', () => {
  let component: QuanlynhatuyendungComponent;
  let fixture: ComponentFixture<QuanlynhatuyendungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlynhatuyendungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlynhatuyendungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
