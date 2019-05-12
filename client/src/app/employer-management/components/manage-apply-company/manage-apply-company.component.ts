import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApplyWorkService } from '../../../services/ApplyWorkService';

@Component({
  selector: 'app-manage-apply-company',
  templateUrl: './manage-apply-company.component.html',
  styleUrls: ['./manage-apply-company.component.css']
})
export class ManageApplyCompanyComponent implements OnInit {

  constructor(private applyWorkService: ApplyWorkService) { }

  URL_IMG: string = environment.API_URL_LABORER_AVATAR;

  statusMenu = false;
  arrContact: any[] = [];
  arrApplyWorks: any[] = [];

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.applyWorkService.getAnApplyByIDCompany().subscribe(data => {
      this.arrApplyWorks = data;
      console.log(data);
    })
    this.applyWorkService.GetContactList().subscribe(data => {
      this.arrContact = data;
    })
  }
}
