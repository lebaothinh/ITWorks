import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Employer } from '../../../models/employer';
import { PLocation } from '../../../models/location';
import { environment } from '../../../../environments/environment'
import { SkillService } from '../../../services/SkillService';
@Component({
  selector: 'app-jobshortcut',
  templateUrl: './jobshortcut.component.html',
  styleUrls: ['./jobshortcut.component.css']
})
export class JobshortcutComponent implements OnInit {

  pathimg = environment.API_URL_IMG;
  @Input('IDCompany') IDCompany: number;
  @Input('IDJob') IDJob: number;
  @Input('jobName') jobName: string;
  @Input('salary') salary: number;
  @Input('jobContent') jobContent: string;
  @Input('arrJobSkills') arrJobSkills: Skill[] = []; 
  @Input('location') location: string;
  @Input('postDate') postDate: Date;
  @Input('logo') logo: string;
  constructor(private skillService: SkillService) { }

  getSkills(){
    this.skillService.GetSkillsByIDJob(this.IDJob).subscribe(data => {
      this.arrJobSkills = data;
    });
  }

  ngOnInit() {
    this.logo = this.pathimg+'/Company/logo/'+this.logo;
    this.location = this.location.split(',')[0].trim();
    this.getSkills();
  }

}
