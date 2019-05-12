import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MakeQuestionService } from 'src/app/services/MakeQuestionService';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { MakeQuestion } from 'src/app/models/MakeQuestion';

@Component({
  selector: 'app-answerquestion',
  templateUrl: './answerquestion.component.html',
  styleUrls: ['./answerquestion.component.css']
})
export class AnswerquestionComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar ,public dialogRef: MatDialogRef<AnswerquestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private makeQuestionService: MakeQuestionService) { }
  
  makeQuestion: FormGroup;

  messageContent = "";
  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;

  initForm(){
    this.makeQuestion = new FormGroup({
      IDMakeQuestion: new FormControl(this.data.IDMakeQuestion),
      IDCompany: new FormControl(this.data.IDCompany),
      IDLaborer: new FormControl(this.data.IDLaborer),
      MakeQuestionDate: new FormControl(this.data.MakeQuestionDate),
      Title: new FormControl(this.data.Title),
      Content: new FormControl(this.data.Content),
      Answer: new FormControl(this.data.Answer),
      Status: new FormControl(this.data.Status)
    })
  }

  ngOnInit() {
    this.initForm();
  }

  onAnswer(){
    this.makeQuestionService.AnswerQuestion(this.makeQuestion.value).subscribe((data) => {
      if (data == true){
        console.log("a");
        this.matSnackBar.open("Answer Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
    }, error => {
      console.log(error);
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
