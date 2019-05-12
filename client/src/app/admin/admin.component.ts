import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;

  constructor() {
  }
  ngOnInit() {
  }
}
