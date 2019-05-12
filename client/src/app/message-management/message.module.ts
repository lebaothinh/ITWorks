import { MessageContentComponent } from "./components/message-content/message-content.component";
import { MessagePopupComponent } from "./components/message-popup/message-popup.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MessageContentComponent,
        MessagePopupComponent
    ],
    imports:[
        CommonModule,
    ],
    exports:[
        MessagePopupComponent
    ]
  })
  export class MessageModule { }