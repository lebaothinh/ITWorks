import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/services/EmployerService';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Employer } from 'src/app/models/employer';
import { UpdateEmployerComponent } from 'src/app/employer-management/components/update-employer/update-employer.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quanlynhatuyendung',
  templateUrl: './quanlynhatuyendung.component.html',
  styleUrls: ['./quanlynhatuyendung.component.css']
})
export class QuanlynhatuyendungComponent implements OnInit {

  constructor(private employerService: EmployerService, public dialog: MatDialog, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadEmployers();
  }
  arrEmployers: Employer[] = [];
  pathimg = environment.API_URL_COMPANY_LOGO;

  loadEmployers(){
    this.employerService.getAllEmployersByAdmin().subscribe(data => {
      this.arrEmployers = data;
      console.log(this.arrEmployers);
    }, error => {
      console.log(error);
    })
  }

  onUpdateEmployer(employer: Employer) {
    const dialogRef = this.dialog.open(UpdateEmployerComponent, {
      width: '90%',
      data: employer
    }).afterClosed().subscribe(() => this.loadEmployers());
  }

  onDeleteEmployer (IDCompany: number){
    this.employerService.deleteByAdmin(IDCompany).subscribe(data => {
      if (data == true){
        this.matSnackBar.open("Deleted Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.arrEmployers = this.arrEmployers.filter(l => l.IDCompany != IDCompany);
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
}
