import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { cvRoutes } from "./cv.routing.module";
import { CvComponent } from "./components/cv/cv.component";
import { CvShortcutComponent } from "./components/cv-shortcut/cv-shortcut.component";
import { SearchCvComponent } from "./components/search-cv/search-cv.component";
import { EditCvComponent } from "./components/edit-cv/edit-cv.component";
import { FindCvComponent } from "./components/find-cv/find-cv.component";
import { CVService } from "../services/CVService";
import { CkeditorModule } from "../ckeditor/ckeditor.module";

@NgModule({
    declarations: [
        SearchCvComponent,
        CvComponent,
        EditCvComponent,
        FindCvComponent,
        CvShortcutComponent,
    ],
    imports: [
        SharedModule,
        CkeditorModule,
        RouterModule.forChild(cvRoutes)
    ],
    providers: [
        CVService
    ]
})
export class CVModule { }