import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from '../services/EmployerService';
import { ForgetPasswordService } from '../services/ForgetPasswordService';
import { LaborerandAdminService } from '../services/LaborerandAdminService';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar,private router: Router, private route: ActivatedRoute, private laborerAndAdminService: LaborerandAdminService, private employerService: EmployerService, private forgetPasswordService: ForgetPasswordService) { }
  sub: Subscription;
  forgetGroup: FormGroup;
  
  ngOnInit() {
    this.initForm();
    this.getToken();
  }

  initForm(){
    this.forgetGroup = new FormGroup({
      password: new FormControl('',[Validators.required]),
      rePassword: new FormControl('',[Validators.required]),
      param: new FormControl('')
    });
  }

  getToken(){
    this.sub = this.route.params.subscribe(param => {
      this.forgetGroup.controls.param.setValue(param['id']);
      this.isExsitParam(param['id']);
    })
  }

  isExsitParam(param: string){
    this.forgetPasswordService.isExist(param).subscribe(data => {
      if (data == false){
        this.router.navigate([""]);
      }
    }, error => {
      this.router.navigate([""]);
      console.log(error);
    });
  }

  isType(param: string): boolean{
    this.forgetPasswordService.isType(param).subscribe(data => {
      if (data == true){
        return true;
      }
    }, error => {
      this.router.navigate([""]);
      console.log(error);
    });
    return false;
  }

  onForgetPassword(){
    if (this.isType(this.forgetGroup.controls.param.value)){
      this.employerService.getForgetPassword(this.forgetGroup).subscribe(data => {
        if (data == true){
          this.matSnackBar.open("Change Password Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
          this.router.navigate(["employer"]);
        }
        else if (data == false){
          this.matSnackBar.open("Change Password Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        }
      }, error => {
        this.matSnackBar.open("Change Password Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
    else{
      this.laborerAndAdminService.getForgetPassword(this.forgetGroup).subscribe(data => {
        if (data == true){
          this.matSnackBar.open("Change Password Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
          this.router.navigate([""]);
        }
        else if (data == false){
          this.matSnackBar.open("Change Password Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        }
      }, error => {
        this.matSnackBar.open("Change Password Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
  }
}
