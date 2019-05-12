import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { laborerRoutes } from "./laborer.routing,module";
import { ProfileLaborerandadminComponent } from "./components/profile-laborerandadmin/profile-laborerandadmin.component";
import { ManageApplyComponent } from "../manage-apply/manage-apply.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { UpdateLaborerComponent } from "./components/update-laborer/update-laborer.component";
import { LaborerandAdminService } from "../services/LaborerandAdminService";
import { TagComponent } from "./components/tag/tag.component";
import { AuthLaborer } from "../services/AuthLaborer";

@NgModule({
  declarations: [
    ProfileLaborerandadminComponent,
    ManageApplyComponent,
    SignInComponent,
    UpdateLaborerComponent,
    TagComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(laborerRoutes)
  ],
  entryComponents: [
    SignInComponent,
    UpdateLaborerComponent
  ],
  providers: [
    LaborerandAdminService,
    AuthLaborer
  ],
  exports: [
  ]
})
export class LaborerModule { }