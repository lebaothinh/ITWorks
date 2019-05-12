import { Component, OnInit, Inject } from '@angular/core';
import { EmployerService } from '../services/EmployerService';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { LaborerandAdminService } from '../services/LaborerandAdminService';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar,private employerService: EmployerService,private laborerAndAdminService: LaborerandAdminService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ChangePasswordComponent>) { }
  formData: FormGroup;
  ngOnInit() {
    this.InitForm();
  }

  InitForm(){
    this.formData = new FormGroup({
      ID: new FormControl(this.data.ID),
      oldPassword: new FormControl('',
        Validators.required
      ),
      newPassword: new FormControl('',
        Validators.required
      ),
      reNewPassword: new FormControl('',
        Validators.required
      )
    });
  }

  btnOKClick(){
    if (this.data.Type == true){
      this.employerService.changePassword(this.formData).subscribe(data => {
        if (data == "Mat khau sai!"){
          this.matSnackBar.open("Old password wrong!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog",
          })
        }
        else{
          this.matSnackBar.open("Change password successfully!!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
          this.onClose();
        }
      }, error => {
        this.matSnackBar.open("Change password fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
    else {
      this.laborerAndAdminService.changePassword(this.formData).subscribe(data => {
        if (data == "Mat khau sai!"){
          this.matSnackBar.open("Old password wrong!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog",
          })
        }
        else{
          this.matSnackBar.open("Change password successfully!!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
          this.onClose();
        }
      }, error => {
        this.matSnackBar.open("Change password fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
