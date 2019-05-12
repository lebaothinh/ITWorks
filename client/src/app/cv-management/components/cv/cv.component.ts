import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { CVService } from '../../../services/CVService';
import { Cv } from '../../../models/cv';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private CVService: CVService, private route: ActivatedRoute) { }
  public Editor = ClassicEditor;
  public data: string = "";
  public CV: Cv = new Cv(null,'','','',new Date(Date.now()),'','',true,0,'','','','','','','','','','','','','');
  public sub: Subscription;
  pathimg = environment.API_URL_IMG;
  public editorConfig = {
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl: 'http://localhost:53667/api/CKEditor/UploadFiles/',
    }
  };

  public onChange({ editor }: ChangeEvent) {
    console.log(editor);
    console.log(this.data);
  }
  ngOnInit() {
    this.GetID();
    this.getCV();
  }

  GetID(){
    this.sub = this.route.params.subscribe(param => {
      this.CV.LaborerId = Number.parseInt(param['id']);
    })
  }

  getCV(){
    this.CVService.getCV(this.CV.LaborerId).subscribe(data => {
      this.CV = data;
      console.log(this.CV);
    });
    
  }

}
