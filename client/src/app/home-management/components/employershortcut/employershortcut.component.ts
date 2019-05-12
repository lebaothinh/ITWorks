import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment'
@Component({
  selector: 'app-employershortcut',
  templateUrl: './employershortcut.component.html',
  styleUrls: ['./employershortcut.component.css']
})
export class EmployershortcutComponent implements OnInit {

  @Input('companyName') companyName: string;
  @Input('logo') logo: string;
  @Input('jobs') jobs: number;
  @Input('headquarters') headquarters: string;

  constructor() { }

  ngOnInit() {
    this.logo = environment.API_URL_IMG+"/Company/logo/"+this.logo;
  }

}
