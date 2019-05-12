import { Component, OnInit } from '@angular/core';
import { Employer } from '../../../models/employer';
import { PLocation } from '../../../models/location';
import { EmployerService } from '../../../services/EmployerService';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-reviews',
  templateUrl: './company-reviews.component.html',
  styleUrls: ['./company-reviews.component.css']
})
export class CompanyReviewsComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar ,private employerService: EmployerService) { }
  arrCompanys: Employer[] = [];
  keywords: string = ''; 
  ngOnInit() {
    this.loadAllEmployer();
  }

  searchCompany (){
    if (this.keywords == ""){
      this.matSnackBar.open("Please type keyworks!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "success-dialog",
      })
    } 
    else
    this.employerService.searchCompany(this.keywords).subscribe(data => {
      if (data.length == 0){
        this.matSnackBar.open("Can not find appropriate companies!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      } 
      else this.arrCompanys = data;
    }, error => {
      console.log(error);
      this.matSnackBar.open("Error","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog",
      })
    });
  }

  loadAllEmployer(){
    this.employerService.getAllEmployers().subscribe((data)=>{
      this.arrCompanys = data;
    })
  }
}
