import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../../models/job';
import { Employer } from '../../../models/employer';
import { Skill } from '../../../models/skill';
import { PLocation } from '../../../models/location';
import { MatDialog } from '@angular/material';
import { ApplyForWordComponent } from '../apply-for-word/apply-for-word.component';
import { JobService } from '../../../services/JobService';
import { EmployerService } from '../../../services/EmployerService';
import { environment } from '../../../../environments/environment'
import { SkillService } from '../../../services/SkillService';
import { AuthLaborer } from 'src/app/services/AuthLaborer';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private authLaborer: AuthLaborer, private route: ActivatedRoute,private dialog: MatDialog, private skillService: SkillService, private jobService: JobService, private employerService: EmployerService) { }
  idJob: number;
  arrSkills: Skill[] =[];
  job: Job = new Job(null,'','',new Date(Date.now()),new Date(Date.now()),0,1,'','','','',false,null,'');
  company: Employer = new Employer(null, null, null, null, null, null, null, null, null, null, null);
  pathimg = environment.API_URL_COMPANY_LOGO;
  pathingA = environment.API_URL_COMPANY_AVATAR;

  getInfomationJob(id: number){
    this.jobService.getAJob(id).subscribe(data => {
      this.job = data;
      console.log(this.job);
      console.log(data);
    });
  }

  getInfomationCompanyByIDJob(id: number){
    this.employerService.getEmployerByIDJob(id).subscribe(data => {
      this.company = data[0];
      console.log(this.company);
    });
  }

  getSkills (id: number){
    this.skillService.GetSkillsByIDJob(id).subscribe(data => {
      this.arrSkills = data;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.idJob = Number.parseInt(param['id']);
      this.getInfomationJob(this.idJob);
      this.getInfomationCompanyByIDJob(this.idJob);
      this.getSkills(this.idJob);
    })
  }

  openDialogApplyForJob(){
    if (this.authLaborer.canActivateSimple())
    this.dialog.open(ApplyForWordComponent,
      {
        width: '60%',
        data: this.idJob
      }
    );
  }
}
