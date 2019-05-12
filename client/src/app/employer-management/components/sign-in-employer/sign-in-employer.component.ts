import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployerService } from '../../../services/EmployerService';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in-employer',
  templateUrl: './sign-in-employer.component.html',
  styleUrls: ['./sign-in-employer.component.css']
})
export class SignInEmployerComponent implements OnInit {

  loginGroup: FormGroup;
  registerGroup: FormGroup;
  forgetGroup: FormGroup;
  index = 0;
  sms: string;

  constructor(
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SignInEmployerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employerService: EmployerService,
    private router: Router) { }


  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.index = this.data.index;
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
      companyName: new FormControl('', [
        Validators.required
      ]),
      generalDescription: new FormControl(''),
      logo: new FormControl('default.jpg'),
      avatar: new FormControl('default.jpg'),
      startTime: new FormControl('Monday'),
      endTime: new FormControl('Friday'),
      overView: new FormControl(''),
      services: new FormControl(''),
      numberOE: new FormControl(''),
      country: new FormControl(''),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      phoneNumber: new FormControl('', [
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
  onRegister() {
    console.log(this.registerGroup.value);
    this.employerService.insertEmployer(this.registerGroup).subscribe(rl => {
      if (rl == "Success.") {
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
    })
  }
  onLogin() {
    localStorage.removeItem('token');
    this.employerService.login(this.loginGroup.value).subscribe((data: any) => {
      if (data == null){
        this.matSnackBar.open("Wrong account or password!","Close",{
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
      localStorage.removeItem('token');
      if (err.error instanceof Error) {
        this.sms = 'Error client side ';
      } else {
        if (err.status === 0) {
          this.sms = 'Error connect to network';
        }
        if (err.status === 401) {
          this.sms = 'Wrong password';
        }
      }
      console.log(this.sms);
      this.matSnackBar.open("Login Error!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }
  onSend(){
    this.employerService.forgetPassword(this.forgetGroup.controls.email.value).subscribe(data => {
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
