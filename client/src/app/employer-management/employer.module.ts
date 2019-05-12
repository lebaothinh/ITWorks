import { NgModule } from '@angular/core';
import { EmployerComponent } from './components/employer/employer.component';
import { SearchCompaniesComponent } from './components/search-companies/search-companies.component';
import { CompanyComponent } from './components/company/company.component';
import { EmployershortcutdetailComponent } from './components/employershortcutdetail/employershortcutdetail.component';
import { CompanyshortcutComponent } from './components/companyshortcut/companyshortcut.component';
import { CompanyReviewsComponent } from './components/company-reviews/company-reviews.component';
import { CompanyFrameComponent } from './components/company-frame/company-frame.component';
import { SignInEmployerComponent } from './components/sign-in-employer/sign-in-employer.component';
import { ProfileEmployerComponent } from './components/profile-employer/profile-employer.component';
import { UpdateEmployerComponent } from './components/update-employer/update-employer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { employerRoutes } from './employer.routing.module';
import { EmployerService } from '../services/EmployerService';
import { ManageApplyCompanyComponent } from './components/manage-apply-company/manage-apply-company.component';
import { CommentComponent } from './components/comment/comment.component';
import { JobshortcutComponent } from '../home-management/components/jobshortcut/jobshortcut.component';
import { MakeQuestionComponent } from './components/make-question/make-question.component';
import { CkeditorModule } from '../ckeditor/ckeditor.module';
import { TagApplyworkComponent } from './components/tag-applywork/tag-applywork.component';
import { AddressProfileComponent } from './components/address-profile/address-profile.component';
import { AddReviewComponent } from '../laborer-management/components/add-review/add-review.component';
import { ReadPdfComponent } from './components/read-pdf/read-pdf.component';
import { AcceptSendemailComponent } from './components/accept-sendemail/accept-sendemail.component';
import { AuthCompany } from '../services/AuthCompany';
import { ManageWorksComponent } from './components/manage-works/manage-works.component';
import { CreatemakequestionComponent } from './components/createmakequestion/createmakequestion.component';
import { AnswerquestionComponent } from './components/answerquestion/answerquestion.component';
import { ManagequestionsComponent } from './components/managequestions/managequestions.component';


@NgModule({
  declarations: [
    EmployerComponent,
    SearchCompaniesComponent,
    CompanyComponent,
    EmployershortcutdetailComponent,
    CompanyshortcutComponent,
    CompanyReviewsComponent,
    CompanyFrameComponent,
    SignInEmployerComponent,
    ProfileEmployerComponent,
    UpdateEmployerComponent,
    ManageApplyCompanyComponent,
    CommentComponent,
    JobshortcutComponent,
    MakeQuestionComponent,
    TagApplyworkComponent,
    AddressProfileComponent,
    AddReviewComponent,
    ReadPdfComponent,
    AcceptSendemailComponent,
    ManageWorksComponent,
    CreatemakequestionComponent,
    AnswerquestionComponent,
    ManagequestionsComponent,
  ],
  imports: [
    SharedModule,
    CkeditorModule,
    RouterModule.forChild(employerRoutes)
  ],
  providers: [
    EmployerService,
    AuthCompany
  ],
  entryComponents: [
    SignInEmployerComponent,
    UpdateEmployerComponent,
    ReadPdfComponent,
    AcceptSendemailComponent,
    AddressProfileComponent,
    AddReviewComponent,
    CreatemakequestionComponent,
    AnswerquestionComponent
  ],
  exports: [
    JobshortcutComponent,
  ]
})
export class EmployerModule { }