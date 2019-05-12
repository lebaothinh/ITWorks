import { Component, OnInit } from '@angular/core';
import { LaborerandAdmin } from 'src/app/models/LaborerandAdmin';
import { LaborerandAdminService } from 'src/app/services/LaborerandAdminService';
import { UpdateLaborerComponent } from 'src/app/laborer-management/components/update-laborer/update-laborer.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-quanlynguoilaodong',
  templateUrl: './quanlynguoilaodong.component.html',
  styleUrls: ['./quanlynguoilaodong.component.css']
})
export class QuanlynguoilaodongComponent implements OnInit {

  constructor(private laborerAndAdminService: LaborerandAdminService, public dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  arrLaborers: LaborerandAdmin[] = [];


  loadLaborer(){
    this.laborerAndAdminService.getListLaborerAccountByAdmin().subscribe(data => {
      this.arrLaborers = data;
    }, error => {
      console.log(error);
    })
  }

  onUpdateLaborer(laborer: LaborerandAdmin) {
    const dialogRef = this.dialog.open(UpdateLaborerComponent, {
      width: '90%',
      data: laborer
    }).afterClosed().subscribe(() => this.loadLaborer());
  }

  onDeleteLaborer (IDLaborer: number){
    this.laborerAndAdminService.deleteByAdmin(IDLaborer).subscribe(data => {
      if (data == true){
        this.matSnackBar.open("Deleted Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.arrLaborers = this.arrLaborers.filter(l => l.IDLaborer != IDLaborer);
      }
      else {
        this.matSnackBar.open("Delete Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.loadLaborer();
  }

}
