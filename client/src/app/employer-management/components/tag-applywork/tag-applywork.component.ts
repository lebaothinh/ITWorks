import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReadPdfComponent } from '../read-pdf/read-pdf.component';
import { AcceptSendemailComponent } from '../accept-sendemail/accept-sendemail.component';
import { environment } from 'src/environments/environment';
import { ApplyWorkService } from '../../../services/ApplyWorkService';
@Component({
  selector: 'app-tag-applywork',
  templateUrl: './tag-applywork.component.html',
  styleUrls: ['./tag-applywork.component.css']
})
export class TagApplyworkComponent implements OnInit {

  constructor(public dialog: MatDialog, private applyWorkService: ApplyWorkService) { }
  imgPath = environment.API_URL_LABORER_AVATAR;

  @Input('laborerName') laborerName;
  @Input('IDLaborer') IDLaborer;
  @Input('IDJob') IDJob;
  @Input('status') status;
  @Input('jobName') jobName;
  @Input('avatar') avatar;
  @Output() AddContact = new EventEmitter<any>();
  @Output() Refresh = new EventEmitter<any>();

  ngOnInit() {
  }

  openDialogPDF(): void {
    let apply = {
      IDLaborer: this.IDLaborer,
      IDJob: this.IDJob,
      status: 1
    };
    this.dialog.open(ReadPdfComponent, {
      width: '90%',
      data: {IDLaborer: this.IDLaborer}
    }).afterClosed().subscribe(() => {
      if (this.status == 0)
      {
        this.applyWorkService.SetStatusByCompany(apply).subscribe(() => {
          this.status = 1;
       });
      }
    });
  }

  openDialogAccept(){
    this.dialog.open(AcceptSendemailComponent, {
      width: '90%',
      data: {
        IDLaborer: this.IDLaborer,
        laborerName: this.laborerName,
        jobName: this.jobName,
        avatar: this.avatar,
        IDJob: this.IDJob
      }
    }).afterClosed().subscribe(() => {
      this.Refresh.emit();
    });
  }
  
  reject(){
    this.applyWorkService.SetStatusByCompany({
      IDLaborer: this.IDLaborer,
      IDJob: this.IDJob,
      status: 4
    }).subscribe(() => {
      this.status = 4;
    });
  }

  remove(){
    this.applyWorkService.SetStatusByCompany({
      IDLaborer: this.IDLaborer,
      IDJob: this.IDJob,
      status: 5
    }).subscribe(() => {
      this.status = 5;
    });
  }
}
