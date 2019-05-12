import { Component, OnInit } from '@angular/core';
import { MessageContent } from '../../../models/MessageContent';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.css']
})
export class MessagePopupComponent implements OnInit {

  constructor() { }
  arrMessages: MessageContent[] = [];
  message: MessageContent ;
  ngOnInit() {
  }

  onClose(){
    let messagePopup = document.getElementById('messagePopup');
    messagePopup.style.display = "none";
  }

  SendMessage(){
    this.message = new MessageContent();
    let textarea = document.getElementById('textarea');
    if (textarea.innerHTML == "") return;
    let arrImages1 = textarea.getElementsByTagName('img');
    let arrImages2: String[] = [];
    for (let i = 0; i<arrImages1.length;i++){
       arrImages2.push(arrImages1.item(i).currentSrc);
    }
    this.message.images = arrImages2;
    this.message.text = textarea.innerText;
    this.message.status = "Delivered";
    this.message.ismine = true;
    this.arrMessages.push(this.message);
    textarea.innerHTML = "";
  }
}
