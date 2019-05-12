import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { LaborerandAdmin } from '../../../models/LaborerandAdmin';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from '../../../services/fileUploadService';
import { LaborerandAdminService } from '../../../services/LaborerandAdminService';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-laborer',
  templateUrl: './update-laborer.component.html',
  styleUrls: ['./update-laborer.component.css']
})
export class UpdateLaborerComponent implements OnInit {
  
  constructor(
    private matSnackBar: MatSnackBar,
    private laborerAndAdminService: LaborerandAdminService,
    private fileUploadService: FileUploadService,
    public dialogRef: MatDialogRef<UpdateLaborerComponent>,
    @Inject(MAT_DIALOG_DATA) public laborer:LaborerandAdmin) { }
  formData: FormGroup;
  stfalse = false;
  sttrue = true;
  @ViewChild('file1') file1;
  @ViewChild('file2') file2;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  ngOnInit() {
    this.initForm(new LaborerandAdmin('', new Date(Date.now()), true, '', '', '', '', '', null));
    this.getInfo();
  }

  getInfo() {
      this.set_Data(this.laborer);
  }

  set_Data(la: LaborerandAdmin) {
    this.formData.controls.IDLaborer.setValue(la.IDLaborer);
    this.formData.controls.laborerName.setValue(la.laborerName);
    this.formData.controls.dateOfBirth.setValue(la.dateOfBirth);
    this.formData.controls.sex.setValue(la.sex);
    this.formData.controls.email.setValue(la.email);
    this.formData.controls.phoneNumber.setValue(la.phoneNumber);
    this.formData.controls.description.setValue(la.description);
    this.formData.controls.avatar.setValue(la.avatar);
    this.formData.controls.cV.setValue(la.cV);
  }

  initForm(la: LaborerandAdmin) {
    this.formData = new FormGroup({
      IDLaborer: new FormControl(la.IDLaborer, [ Validators.required]),
      laborerName: new FormControl(la.laborerName, [
        Validators.required
      ]),
      dateOfBirth: new FormControl(la.dateOfBirth, [
        Validators.required
      ]),
      sex: new FormControl(la.sex, [
        Validators.required
      ]),
      email: new FormControl(la.email, [
        Validators.required
      ]),
      phoneNumber: new FormControl(la.phoneNumber, [
        Validators.required
      ]),
      description: new FormControl(la.description, [
        Validators.required
      ]),
      avatar: new FormControl(la.avatar,

      ),
      cV: new FormControl(la.cV)
    });
  }

  onUpdate() {
    if (this.fileToUpload1 == null && this.fileToUpload2 == null) {
      this.laborerAndAdminService.updateByAdmin(this.formData).subscribe(() => {
        this.matSnackBar.open("Updated Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }, error => {
        console.error(error);
        this.matSnackBar.open("Update Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      });
    }
    else if (this.fileToUpload1 != null && this.fileToUpload2 != null) {
      this.fileUploadService.uploadAvatar(this.fileToUpload1).subscribe((datanameavatar: string) => {
        this.fileUploadService.uploadCV(this.fileToUpload2).subscribe((datanamecv: number) => {
          this.formData.controls.avatar.setValue(datanameavatar);
          this.formData.controls.cV.setValue(datanamecv);
          this.laborerAndAdminService.updateByAdmin(this.formData).subscribe(() => {
            this.matSnackBar.open("Updated Successfully!","Close",{
              duration: 2000,
              verticalPosition: 'top',
              panelClass: "success-dialog",
            })
          }, error => {
            console.error(error);
            this.matSnackBar.open("Update Fail!","Close",{
              duration: 2000,
              verticalPosition: 'top',
              panelClass: "warn-dialog"
            })
          });
        }, error => {
          console.error(error);
        });
      })

    }
    else if (this.fileToUpload1 != null) {
      //Move image into folder
      this.fileUploadService.uploadAvatar(this.fileToUpload1).subscribe((dataname: string) => {
        this.formData.controls.avatar.setValue(dataname);
        this.laborerAndAdminService.updateByAdmin(this.formData).subscribe(() => {
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }, error => {
          console.error(error);
          this.matSnackBar.open("Update Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        });
      }, error => {
        console.error(error);
      });
    }
    else if (this.fileToUpload2 != null) {
      //Move image into folder
      this.fileUploadService.uploadCV(this.fileToUpload2).subscribe((dataname: string) => {
        this.formData.controls.cV.setValue(dataname);
        this.laborerAndAdminService.updateByAdmin(this.formData).subscribe(() => {
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }, error => {
          console.error(error);
          this.matSnackBar.open("Update Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        });
      }, error => {
        console.error(error);
      });
    }
    this.dialogRef.close();
  }

  addAvatar() {
    this.file1.nativeElement.click();
  }
  handleFileAvatar(files: FileList) {
    this.fileToUpload1 = files.item(0);
    this.formData.controls.avatar.setValue(this.fileToUpload1.name);
    console.log(this.fileToUpload1);
    console.log(this.formData);
  }
  handleFileCV(files: FileList) {
    this.fileToUpload2 = files.item(0);
    this.formData.controls.cV.setValue(this.fileToUpload2.name);
    console.log(this.fileToUpload2);
    console.log(this.formData);
  }
  addCV() {
    this.file2.nativeElement.click();
  }
}
