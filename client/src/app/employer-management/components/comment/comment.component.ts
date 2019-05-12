import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  
  @Input('title') title: string;
  @Input('star') star: number;
  @Input('recommendation') recommendation: boolean;
  @Input('reviewDate') reviewDate: Date;
  @Input('like') like: string;
  @Input('dislike') dislike: string;

  ngOnInit() {
  }

}
