import { Component, OnInit } from '@angular/core';
import { Employer } from '../../../models/employer';
import { PLocation } from '../../../models/location';
import { SignInEmployerComponent } from '../sign-in-employer/sign-in-employer.component';
import { MatDialog } from '@angular/material';
import { EmployerService } from '../../../services/EmployerService'
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  tenKhachHang: any;
  ngaySinh: any;
  gioiTinh: any;
  email: any;
  dienThoai: any;
  moTa: any;
  cV: any;
  anhDaiDien: any;

  constructor(private dialog: MatDialog, private employerService: EmployerService) { }
  arrCompanys: Employer[];
  pathimg = environment.API_URL_IMG;
  ngOnInit() {
    this.loadAllEmployer();
  }
  loadAllEmployer(){
    this.employerService.getTop6Employer().subscribe((data)=>{
      console.log(data);
      this.arrCompanys = data;
    })}
  openSignInEmployerDialog(index: number){
    const dialogRef = this.dialog.open(SignInEmployerComponent, {
      width: '46%',
      data: {
        index: index
      }
    });
  }

}
