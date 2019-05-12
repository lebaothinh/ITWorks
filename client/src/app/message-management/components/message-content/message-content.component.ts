import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.css']
})
export class MessageContentComponent implements OnInit {

  constructor() { }
  @Input("images") arrImages: string[];
  @Input("text") text: string;
  @Input("ismine") isMine: boolean;
  @Input("status") status: string;
  
  ngOnInit() {
  }

}
