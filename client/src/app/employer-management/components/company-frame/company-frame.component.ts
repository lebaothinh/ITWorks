import { Component, OnInit, Input } from '@angular/core';
import { PLocation } from '../../../models/location';
import { EmployerService } from '../../../services/EmployerService';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-company-frame',
  templateUrl: './company-frame.component.html',
  styleUrls: ['./company-frame.component.css']
})
export class CompanyFrameComponent implements OnInit {

  API_IMG = environment.API_URL_IMG;
  @Input('avatar') avatar: string;
  @Input('logo') logo: string;  
  @Input('companyName') companyName: string;
  @Input('star') star: number;
  @Input('generalDescription') generalDescription: string;
  @Input('arrlocation') arrlocation: Array<PLocation>;
  @Input('jobs') jobs: number;

  constructor(private employerService: EmployerService) { }

  ngOnInit() {
    this.avatar = this.API_IMG+"/Company/avatar/"+this.avatar;
    this.logo = this.API_IMG+"/Company/logo/"+this.logo;
  }

}
