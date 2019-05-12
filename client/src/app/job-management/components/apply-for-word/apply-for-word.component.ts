import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LaborerandAdminService } from '../../../services/LaborerandAdminService';
import { ActivatedRoute, Router } from '@angular/router';
import { LaborerandAdmin } from '../../../models/LaborerandAdmin';
import { environment } from '../../../../environments/environment';
import { ApplyWorkService } from '../../../services/ApplyWorkService';

@Component({
  selector: 'app-apply-for-word',
  templateUrl: './apply-for-word.component.html',
  styleUrls: ['./apply-for-word.component.css']
})
export class ApplyForWordComponent implements OnInit {

  srcCV: string = environment.API_URL_IMG + '/LaborerAndAdmin/cv/';
  formData: FormGroup;
  la: LaborerandAdmin;
  constructor(
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ApplyForWordComponent>,
    private laborerAndAdminService: LaborerandAdminService,
    private applyWorkService: ApplyWorkService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  initForm() {
    this.formData = new FormGroup({
      IDLaborer: new FormControl('',
        Validators.required
      ),
      IDJob: new FormControl('',
        Validators.required
      ),
      description: new FormControl('',
        Validators.required
      ),
      approval: new FormControl(false,
        Validators.required
      )
    });
  }

  getInfo() {
    this.laborerAndAdminService.getLaA().subscribe(data => {
      this.la = new LaborerandAdmin(data.laborerName, data.dateOfBirth, data.sex, data.email, data.phoneNumber, data.description, data.cV, data.avatar, data.skills);
      this.set_Data(this.la);
    });
  }

  set_Data(la: LaborerandAdmin) {
    this.srcCV += la.cV;
    this.formData.controls.IDLaborer.setValue(0);
    this.formData.controls.IDJob.setValue(this.data);
  }

  ngOnInit() {
    this.initForm();
    this.getInfo();
  }

  onClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.formData.value);
    this.applyWorkService.insertAnApply(this.formData).subscribe((data) => {
      if (data == "Trung don!") {
        this.matSnackBar.open("You had apply for this job. Please go to Manage Apply to edit","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
      else if (data != "") {
        console.log(data);
        this.dialogRef.close();
        this.matSnackBar.open("Apply Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
    }, error => {
      console.log(error);
      this.matSnackBar.open("Apply Fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }
}
