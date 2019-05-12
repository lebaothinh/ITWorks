import { Routes } from "@angular/router/src/config";
import { ProfileLaborerandadminComponent } from "./components/profile-laborerandadmin/profile-laborerandadmin.component";
import { ManageApplyComponent } from "../manage-apply/manage-apply.component";
import { AuthLaborer } from "../services/AuthLaborer";

export const laborerRoutes: Routes = [
    {
        path: 'profilelaborerandadmin',
        component: ProfileLaborerandadminComponent,
        canActivate: [AuthLaborer]
    },
    {
        path: 'manageapply',
        component: ManageApplyComponent,
        canActivate: [AuthLaborer]
    },
]