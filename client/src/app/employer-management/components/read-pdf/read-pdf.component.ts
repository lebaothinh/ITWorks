import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CVService } from '../../../services/CVService';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.css']
})
export class ReadPdfComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReadPdfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private CVService: CVService) { }

  linkFile: String = "";

  ngOnInit() {
    this.getPdfFile(this.data.IDLaborer);
  }

  getPdfFile(idLaborer: number){
    this.CVService.GetLinkCV(idLaborer).subscribe(data => {
      if (data != null){
        this.linkFile = data.result;
      }
    });
  }
}
