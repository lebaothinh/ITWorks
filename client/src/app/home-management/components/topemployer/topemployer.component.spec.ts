import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopemployerComponent } from './topemployer.component';

describe('TopemployerComponent', () => {
  let component: TopemployerComponent;
  let fixture: ComponentFixture<TopemployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopemployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
