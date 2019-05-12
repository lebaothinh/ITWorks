import { Component, OnInit } from '@angular/core';
import { MakeQuestion } from 'src/app/models/MakeQuestion';
import { MakeQuestionService } from 'src/app/services/MakeQuestionService';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AnswerquestionComponent } from '../answerquestion/answerquestion.component';
import { AuthCompany } from 'src/app/services/AuthCompany';

@Component({
  selector: 'app-managequestions',
  templateUrl: './managequestions.component.html',
  styleUrls: ['./managequestions.component.css']
})
export class ManagequestionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private makeQuestionService: MakeQuestionService, private matSnackBar: MatSnackBar, private authCompany: AuthCompany) { }

  arrQuestions: MakeQuestion[] = [];

  getQuestion(){
    this.makeQuestionService.GetAllQuestionByCompany().subscribe((data) => {
      if (data != null){
        this.arrQuestions = data;
      }
    }, error => {
      this.matSnackBar.open("Can not get questions!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      console.log(error);
    });
  }

  ngOnInit() {
    this.getQuestion();
  }

  openAnswerDialog(question: MakeQuestion){
    if (this.authCompany.canActivateSimple())
    this.dialog.open(AnswerquestionComponent, {
      width: '46%',
      data: question
      // data: new Customer(this.tenKhachHang,this.ngaySinh,this.gioiTinh,this.email,this.dienThoai,this.moTa,this.cV,this.anhDaiDien)
    }).afterClosed().subscribe(() => {
      this.getQuestion();
    });
  }

  
}
