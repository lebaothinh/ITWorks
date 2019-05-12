import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/JobService";
import { LocationService } from "src/app/services/LocationServicec";
import { environment } from "src/environments/environment";
import { Job } from "src/app/models/job";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PLocation } from "src/app/models/location";
import { MatTabChangeEvent, MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-manage-works',
  templateUrl: './manage-works.component.html',
  styleUrls: ['./manage-works.component.css']
})
export class ManageWorksComponent implements OnInit {

  constructor(private jobService: JobService, private matSnackBar: MatSnackBar,
    private locationService: LocationService) { }
    
  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;
  arrJobs: Job[];
  idCompany: number;
  formData: FormGroup;
  index: number = 0;
  job: Job;
  arrPositions: PLocation[];
  update = false;
  autoChangeTab = false;

  ngOnInit() {
    this.getLocations();
    this.job = new Job(null,'','',new Date(Date.now()),new Date(Date.now()),0,1,'','','','',false,null,'');
    this.InitForm(this.job);
    this.getAllJobs();
  }
  
  resetState(event: MatTabChangeEvent){
    if (this.autoChangeTab){
      this.update = true;
    }
    else{
      this.update = false;
      this.job = new Job(null,'','',new Date(Date.now()),new Date(Date.now()),0,1,'','','','',false,null,'');
      this.InitForm(this.job);
    }
    this.autoChangeTab = false;
  }

  getLocations(){
    this.locationService.getLocationsByToken().subscribe(data => {
      if (data != null){
        this.arrPositions = data;
      }
      else {
        console.log("Khong co location");
      }
    }, error => {
      console.log(error);
    })
  }
  
  getAllJobs() {
    this.jobService.getAllJobsByCompany().subscribe(data => {
      this.arrJobs = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  deleteJob(id: number){
    this.jobService.deleteAJob(id).subscribe(data => {
      if (data == "Thanh cong!"){
        this.matSnackBar.open("Deleted Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.arrJobs = this.arrJobs.filter(eachJob => eachJob.IDJob != id)
      }
      if (data == "Wrong Token!"){
        this.matSnackBar.open("You don't have permission!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
    }, error => {
      this.matSnackBar.open("Delete Fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      console.log(error);
    });
  }

  updateJob(id: number){
    this.autoChangeTab = true;
    this.index = 1;
    this.jobService.getAJob(id).subscribe((data) => {
      console.log(data);
      let job = new Job(data.IDCompany,data.position,data.jobName,data.postDate,data.expirationDate,data.salary,data.IDLocation,data.top3Reasons,data.jobContent,data.skillsAndExperience,data.reasonWorking,data.hotJob,null,data.location);
      job.IDJob = id;
      this.InitForm(job);
    });
  }

  InitForm(job: Job) {
    this.formData = new FormGroup({
      IDJob: new FormControl(job.IDJob),
      IDCompany: new FormControl(job.IDCompany,
        Validators.required
      ),
      position: new FormControl(job.position,
        Validators.required
      ),
      jobName: new FormControl(job.jobName, Validators.required),
      postDate: new FormControl(job.postDate, Validators.required),
      expirationDate: new FormControl(job.expirationDate, Validators.required),
      salary: new FormControl(job.salary, Validators.required),
      IDLocation: new FormControl(job.IDLocation, Validators.required),
      top3Reasons: new FormControl(job.top3Reasons, Validators.required),
      jobContent: new FormControl(job.jobContent, Validators.required),
      skillsAndExperience: new FormControl(job.skillsAndExperience, Validators.required),
      reasonWorking: new FormControl(job.reasonWorking, Validators.required),
      hotJob: new FormControl(job.hotJob, Validators.required)
    });
  }

  btnOKClick(){
    if (this.formData.invalid){
      this.matSnackBar.open("Please fill out fully!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      return;
    }
    if (this.update == false){
      this.jobService.insertAJob(this.formData).subscribe(data => {
        if (data != null) {
          this.arrJobs = data;
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
    else {
      console.log(this.formData)
      this.jobService.updateAJob(this.formData).subscribe(data => {
        if (data != null) {
          this.arrJobs = data;
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }
      }, error => {
        this.matSnackBar.open("Update Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
  }
}
