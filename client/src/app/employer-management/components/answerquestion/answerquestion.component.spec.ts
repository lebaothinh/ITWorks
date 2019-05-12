import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerquestionComponent } from './answerquestion.component';

describe('AnswerquestionComponent', () => {
  let component: AnswerquestionComponent;
  let fixture: ComponentFixture<AnswerquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
