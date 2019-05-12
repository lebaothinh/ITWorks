import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.routing.module';
import { ProfileService } from './services/profileService';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FileUploadService } from './services/fileUploadService';
import { BranchService } from './services/BranchService';
import { ApplyWorkService } from './services/ApplyWorkService';
import { ReviewService } from './services/ReviewService';
import { SkillService } from './services/SkillService';
import { RegisterPackagesService } from './services/RegisterPackages';
import { ForgetPasswordComponent } from './forget-password/forget-password.component'
import { ForgetPasswordService } from './services/ForgetPasswordService';
import { FollowService } from './services/FollowService';
import { MakeQuestionService } from './services/MakeQuestionService';
import { LocationService } from './services/LocationServicec';
import { NotificationService } from './services/NotificationService';
import { RouterModule } from '@angular/router';
import { CkeditorModule } from './ckeditor/ckeditor.module';
import { EmployerModule } from './employer-management/employer.module';
import { MessageModule } from './message-management/message.module';
import { JobModule } from './job-management/job.module';
import { CVModule } from './cv-management/cv.module';
import { HomeModule } from './home-management/home.module';
import { LaborerModule } from './laborer-management/laborer.module';
import { AuthLaborer } from './services/AuthLaborer';
import { AuthAdmin } from './services/AuthAdmin';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    MessageModule,
    EmployerModule,
    LaborerModule,
    JobModule,
    CVModule,
    AdminModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProfileService,
    FileUploadService,
    BranchService,
    ApplyWorkService,
    ReviewService,
    SkillService,
    RegisterPackagesService,
    ForgetPasswordService,
    FollowService,
    MakeQuestionService,
    LocationService,
    NotificationService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ChangePasswordComponent,
  ],
  exports:[
  ]
})
export class AppModule { }
