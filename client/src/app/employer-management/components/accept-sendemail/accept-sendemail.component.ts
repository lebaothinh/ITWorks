import { Component, OnInit, Inject, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ApplyWorkService } from '../../../services/ApplyWorkService';

@Component({
  selector: 'app-accept-sendemail',
  templateUrl: './accept-sendemail.component.html',
  styleUrls: ['./accept-sendemail.component.css']
})
export class AcceptSendemailComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar ,public dialogRef: MatDialogRef<AcceptSendemailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private applyWorkService: ApplyWorkService) { }
  
  messageContent = "Dear "+ this.data.laborerName;
  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;

  ngOnInit() {
  }

  AcceptAndSendEmail(){
    this.applyWorkService.AcceptAndSendEmail({
      IDLaborer: this.data.IDLaborer,
      IDJob: this.data.IDJob,
      contentEmail: this.messageContent
    }).subscribe((data) => {
      if (data == true){
        this.matSnackBar.open("Send Email Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
    }, error => {
      this.matSnackBar.open("Please check email again!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
    this.onClose();
  }

  AcceptAndContactLater(){
    this.applyWorkService.AcceptAndContactLater({
      IDLaborer: this.data.IDLaborer,
      IDJob: this.data.IDJob
    }).subscribe(data => {
      if (data == true){
        this.matSnackBar.open("Added Into Contact List!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.onClose();
      }
    })
  }

  onClose(){
    this.dialogRef.close();
  }
}
