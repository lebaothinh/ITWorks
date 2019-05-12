import { Component, OnInit } from '@angular/core';
import { LaborerandAdmin } from 'src/app/models/LaborerandAdmin';
import { LaborerandAdminService } from 'src/app/services/LaborerandAdminService';

@Component({
  selector: 'app-quantrihethong',
  templateUrl: './quantrihethong.component.html',
  styleUrls: ['./quantrihethong.component.css']
})
export class QuantrihethongComponent implements OnInit {

  constructor(private laborerAndAdminService: LaborerandAdminService) { }

  arrLaborers: LaborerandAdmin[] = [];

  ngOnInit() {
  }

  getListAdminAccount(){
    this.laborerAndAdminService.getListAdminAccountByAdmin().subscribe(data => {
      this.arrLaborers = data;
    }, error => {
      console.log(error);
    })
  }

  onUpdateAdminAccount(){

  }
}
