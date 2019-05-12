import { Routes } from "@angular/router";
import { EmployerComponent } from "./components/employer/employer.component";
import { ProfileEmployerComponent } from "./components/profile-employer/profile-employer.component";
import { CompanyComponent } from "./components/company/company.component";
import { CompanyReviewsComponent } from "./components/company-reviews/company-reviews.component";
import { ManageApplyCompanyComponent } from "./components/manage-apply-company/manage-apply-company.component";
import { AuthCompany } from "../services/AuthCompany";
import { ManageWorksComponent } from "./components/manage-works/manage-works.component";
import { ManagequestionsComponent } from "./components/managequestions/managequestions.component";

export const employerRoutes: Routes = [
    {
        path: 'employer',
        component: EmployerComponent
    },
    {
        path: 'company/:id',
        component: CompanyComponent
    },
    {
        path: 'profileemployer',
        component: ProfileEmployerComponent,
        canActivate: [AuthCompany]
    },
    {
        path: 'companyreviews',
        component: CompanyReviewsComponent
    },
    {
        path: 'manageapplycompany',
        component: ManageApplyCompanyComponent,
        canActivate: [AuthCompany]
    },
    {
        path: 'managequestions',
        component: ManagequestionsComponent,
        canActivate: [AuthCompany]
    },
    {
        path: 'manageworks',
        component: ManageWorksComponent,
        canActivate: [AuthCompany]
    },
]