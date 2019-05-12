import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profileService';
import { LaborerandAdminService } from '../../../services/LaborerandAdminService';
import { LaborerandAdmin } from '../../../models/LaborerandAdmin';
import { FileUploadService } from '../../../services/fileUploadService';
import { HeaderComponent } from '../../../header/header.component';
import { SkillService } from '../../../services/SkillService';
import { Skill } from '../../../models/skill';
import { Event } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile-laborerandadmin',
  templateUrl: './profile-laborerandadmin.component.html',
  styleUrls: ['./profile-laborerandadmin.component.css']
})
export class ProfileLaborerandadminComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar, private laborerAndAdminService: LaborerandAdminService, private skillService: SkillService,
    private fileUploadService: FileUploadService) { }
  formData: FormGroup;
  arrSkills: Skill[] = [];
  keySkill: String = "";
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
    this.laborerAndAdminService.getLaA().subscribe(data => {
      let la: LaborerandAdmin = new LaborerandAdmin(data.laborerName, data.dateOfBirth, data.sex, data.email, data.phoneNumber, data.description, data.cV, data.avatar, data.skills);
      this.set_Data(la);
      console.log(this.formData);
    });
  }

  RemoveSkill(id: number){
    this.skillService.RemoveSkill(id).subscribe(data => {
      if (data != null){
        this.formData.controls.skills.setValue(data);
      }
    }, error => {
      console.log(error);
    });
  }

  AddSkill(id: number){
    this.skillService.AddSkill(id).subscribe(data => {
      this.formData.controls.skills.setValue(data);
      this.keySkill = "";
    });
  }

  set_Data(la: LaborerandAdmin) {
    this.formData.controls.laborerName.setValue(la.laborerName);
    this.formData.controls.dateOfBirth.setValue(la.dateOfBirth);
    this.formData.controls.sex.setValue(la.sex);
    this.formData.controls.email.setValue(la.email);
    this.formData.controls.phoneNumber.setValue(la.phoneNumber);
    this.formData.controls.description.setValue(la.description);
    this.formData.controls.avatar.setValue(la.avatar);
    this.formData.controls.cV.setValue(la.cV);
    this.formData.controls.skills.setValue(la.skills);
  }

  initForm(la: LaborerandAdmin) {
    this.formData = new FormGroup({
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
      cV: new FormControl(la.cV),
      skills: new FormControl(la.skills)
    });
  }

  onUpdate() {
    if (this.fileToUpload1 == null && this.fileToUpload2 == null) {
      this.laborerAndAdminService.updateLaA(this.formData).subscribe(() => {
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
          this.laborerAndAdminService.updateLaA(this.formData).subscribe(() => {
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
        this.laborerAndAdminService.updateLaA(this.formData).subscribe(() => {
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
          window.location.reload();
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
        this.laborerAndAdminService.updateLaA(this.formData).subscribe(() => {
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

  FindoutSkills(keySkill: String, event: any){
    console.log(event);
    if (event.code == "Semicolon"){

    }
    else if (event.code != "Backspace" && event.code != "Detele")
    {
      this.skillService.FindoutSkills(keySkill).subscribe(data => {
        this.arrSkills = data;
        console.log(this.arrSkills);
      }, error => {
        console.log(error);
      });
    }
  }
}
