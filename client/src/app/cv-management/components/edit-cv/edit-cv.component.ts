import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Cv } from '../../../models/cv';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CVService } from '../../../services/CVService';
import { ProfileService } from '../../../services/profileService';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.css']
})
export class EditCvComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar, private cvService: CVService, private profileService: ProfileService, private router: Router) { }
  hidden: Boolean = false;

  ngOnInit() {
    this.initForm();
    this.CreateOrUpdate();
  }

  CreateOrUpdate(){
    this.cvService.CreateOrUpdate().subscribe(data => {
      if (data != null){
        this.CVModel = data;
        this.hidden = !this.hidden;
      }
    });
  }

  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;
  CVModel: Cv;
  CVGroup: FormGroup;

  initForm(){
    this.CVModel = new Cv(null,'','','',new Date(Date.now()),'','',true,0,'','','','','','','','','','','','','');
    this.CVGroup = new FormGroup({
      ShortDescription: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      GPA: new FormControl('', [Validators.required]),
      Major: new FormControl('', [Validators.required]),
      Character: new FormControl('', [Validators.required]),
      ApplyPosition: new FormControl('', [Validators.required]),
      Hobbies: new FormControl('', [Validators.required]),
      Objective: new FormControl('', [Validators.required]),
      WorkExperience: new FormControl('', [Validators.required]),
      SoftSkills: new FormControl('', [Validators.required]),
      Skills: new FormControl('', [Validators.required]),
      Languages: new FormControl('', [Validators.required]),
      Awards: new FormControl('', [Validators.required]),
      Education: new FormControl('', [Validators.required]),
      DetailInformation: new FormControl('', [Validators.required])
    });
  }
  seeMyCV(){
    this.profileService.getID().subscribe(data => {
      if (data != null){
        this.router.navigate(['/cv/'+data]);
      }
    });
  }
  onSubmit(){
    console.log(this.CVModel);
    if (this.hidden){
       this.cvService.UpdateCV(this.CVModel).subscribe(data => {
         if (data ="Thanh cong!"){
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
         }
         else {
          this.matSnackBar.open("Update Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
         }
       }, error => {
         console.log(error);
         this.matSnackBar.open("Error","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
       });
    }
    else{
      this.cvService.insertCV(this.CVModel).subscribe(data => {
        if (data == true){
          this.matSnackBar.open("Insert Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }
      }, error => {
        this.matSnackBar.open("Insert Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
  }
}
