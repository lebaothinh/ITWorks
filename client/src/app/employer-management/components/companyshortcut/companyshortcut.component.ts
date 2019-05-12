import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../models/skill';
import { PLocation } from '../../../models/location';

@Component({
  selector: 'app-companyshortcut',
  templateUrl: './companyshortcut.component.html',
  styleUrls: ['./companyshortcut.component.css']
})
export class CompanyshortcutComponent implements OnInit {

  @Input('logo') logo: string;
  @Input('companyName') companyName: string;
  @Input('services') services: string;
  @Input('numberOE') numberOE: number;
  @Input('country') country: string;
  @Input('arrCompanySkills') arrCompanySkills: Array<Skill>;
  @Input('headquarters') headquarters: PLocation;
  @Input('jobs') jobs: number;
  constructor() { }
 
  ngOnInit() {
  }

}
