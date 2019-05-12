import { Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthAdmin } from './services/AuthAdmin';
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'forgetpassword/:id',
        component: ForgetPasswordComponent
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthAdmin]
    }
];