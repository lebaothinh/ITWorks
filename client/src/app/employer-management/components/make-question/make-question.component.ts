import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-make-question',
  templateUrl: './make-question.component.html',
  styleUrls: ['./make-question.component.css']
})
export class MakeQuestionComponent implements OnInit {

  constructor() { }

@Input('Answer') Answer = ""
@Input('Content') Content = '';
@Input('IDCompany') IDCompany: number;
@Input('IDLaborer') IDLaborer: number;
@Input('IDMakeQuestion') IDMakeQuestion: number;
@Input('MakeQuestionDate') MakeQuestionDate: Date;
@Input('Title') Title: String = '';

hidden = false;
  ngOnInit() {
    $('.answer').hide();
  }

}
