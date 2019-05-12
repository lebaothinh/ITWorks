import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MakeQuestionService } from 'src/app/services/MakeQuestionService';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createmakequestion',
  templateUrl: './createmakequestion.component.html',
  styleUrls: ['./createmakequestion.component.css']
})
export class CreatemakequestionComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar ,public dialogRef: MatDialogRef<CreatemakequestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private makeQuestionService: MakeQuestionService) { }
  
  makeQuestion: FormGroup;

  messageContent = "";
  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;

  initForm(){
    this.makeQuestion = new FormGroup({
      IDMakeQuestion: new FormControl(),
      IDCompany: new FormControl(this.data),
      IDLaborer: new FormControl(),
      MakeQuestionDate: new FormControl(Date.now()),
      Title: new FormControl(''),
      Content: new FormControl(''),
      Answer: new FormControl(''),
      Status: new FormControl(false)
    })
  }

  ngOnInit() {
    this.initForm();
  }

  Send(){
    this.makeQuestionService.AddAQuestion(this.makeQuestion.value).subscribe((data) => {
      if (data == true){
        this.matSnackBar.open("Send Questtion Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
    }, error => {
      this.matSnackBar.open("There are some wrong!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
    this.onClose();
  }

  onClose(){
    this.dialogRef.close();
  }

}
