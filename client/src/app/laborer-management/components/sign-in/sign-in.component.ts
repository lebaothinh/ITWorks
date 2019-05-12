import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { LaborerandAdmin } from '../../../models/LaborerandAdmin';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaborerandAdminService } from '../../../services/LaborerandAdminService';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  loginGroup: FormGroup;
  registerGroup: FormGroup;
  forgetGroup: FormGroup;

  constructor(
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data:LaborerandAdmin,
    private laborerandAdminService: LaborerandAdminService,
    private router: Router) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.forgetGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });

    this.loginGroup = new FormGroup({
      account: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });

    this.registerGroup = new FormGroup({
      laborerName: new FormControl('', [
        Validators.required
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      sex: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      phoneNumber: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      account: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onLogin() {
    localStorage.removeItem('token');
    this.laborerandAdminService.login(this.loginGroup).subscribe((data: any) => {
      if (data == null){
        this.matSnackBar.open("Wrong username or password","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
      else{
        this.matSnackBar.open("Login Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        localStorage.setItem('token', data);
        this.onClose();
        window.location.reload();
        this.router.navigate(['']);
      }
      
    }, err => {
      let sms;
      localStorage.removeItem('token');
      if (err.error instanceof Error) {
        sms = 'Error client side ';
      } else {
        if (err.status === 0) {
          sms = 'Error connect to network';
        }
        if (err.status === 401) {
          sms = 'Wrong password';
        }
      }
      console.log(sms);
      this.matSnackBar.open("Login Fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  onRegister (){
    console.log(this.registerGroup.value)
    this.laborerandAdminService.insertLaA(this.registerGroup).subscribe(data => {
      if (data == "Success."){
        this.matSnackBar.open("Register Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.onClose();
      }
    }, (error: HttpErrorResponse) => {
      if (error.status == 409)
      {
        this.matSnackBar.open(error.error.Message,"Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
      else{
        this.matSnackBar.open("Register Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
      console.log(error);
    });
  }

  onSend(){
    this.laborerandAdminService.forgetPassword(this.forgetGroup.controls.email.value).subscribe(data => {
      if (data == true){
        this.matSnackBar.open("We sent a request to your email. Please check it.!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
    }, error => {
      this.matSnackBar.open("Sending email fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      console.log(error);
    });
  }
}
