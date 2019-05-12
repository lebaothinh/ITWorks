import { Component, OnInit } from '@angular/core';
import { ApplyWorkService } from '../services/ApplyWorkService';
import {environment} from '../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manage-apply',
  templateUrl: './manage-apply.component.html',
  styleUrls: ['./manage-apply.component.css']
})
export class ManageApplyComponent implements OnInit {

  constructor(private applyWorkService: ApplyWorkService, private matSnackBar: MatSnackBar) { }

  arrAppliesWork: any[];
  URL_IMG: string = environment.API_URL_IMG+"/Company/logo/";

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.applyWorkService.getAnApplyByLaborer().subscribe(data => {
      this.arrAppliesWork = data;
    })
  }

  onDelete(IDJob: number){
    this.applyWorkService.DeleteApply(IDJob).subscribe((data) => {
      if (data != "" && data == "Thanh cong!"){
        this.matSnackBar.open("Deleted Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.arrAppliesWork = this.arrAppliesWork.filter(eachApp => eachApp.IDJob !== IDJob);
      }
    });
  }
}
