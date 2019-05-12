import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkedoanhthuComponent } from './thongkedoanhthu.component';

describe('ThongkedoanhthuComponent', () => {
  let component: ThongkedoanhthuComponent;
  let fixture: ComponentFixture<ThongkedoanhthuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongkedoanhthuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongkedoanhthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
