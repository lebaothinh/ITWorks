import { Component, OnInit } from '@angular/core';
import { CVService } from '../../../services/CVService';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-find-cv',
  templateUrl: './find-cv.component.html',
  styleUrls: ['./find-cv.component.css']
})
export class FindCvComponent implements OnInit {

  constructor(private CVService: CVService, private matSnackBar: MatSnackBar) { }

  arrCVShortcut = [];
  keywords: string = '';

  ngOnInit() {
    this.getTop10CVNewest();
  }

  getTop10CVNewest(){
    this.CVService.GetTop10CVNewest().subscribe(data => {
      this.arrCVShortcut = data;
    }, error => {
      console.log(error);
      this.matSnackBar.open("Can not get top 10 CV newest","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  onSearch(){
    this.CVService.searchCVShortcut(this.keywords).subscribe(data => {
      this.arrCVShortcut = data;
    }, error => {
      console.log(error);
    });
  }
}
