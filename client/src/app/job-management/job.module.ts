import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { jobRoutes } from "./job.routing.module";
import { JobComponent } from "./components/job/job.component";
import { ApplyForWordComponent } from "./components/apply-for-word/apply-for-word.component";
import { JobService } from "../services/JobService";
import { CkeditorModule } from "../ckeditor/ckeditor.module";

@NgModule({
    declarations: [
        JobComponent,
        ApplyForWordComponent,
    ],
    imports: [
      CommonModule,
      CkeditorModule,
      SharedModule,
      RouterModule.forChild(jobRoutes)
    ],
    entryComponents:[
      ApplyForWordComponent
    ],
    providers:[
      JobService
    ]
  })
export class JobModule { }