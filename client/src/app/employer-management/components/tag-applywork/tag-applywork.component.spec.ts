import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagApplyworkComponent } from './tag-applywork.component';

describe('TagApplyworkComponent', () => {
  let component: TagApplyworkComponent;
  let fixture: ComponentFixture<TagApplyworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagApplyworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagApplyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
