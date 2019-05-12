import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProfileService } from './profileService';
import { SignInEmployerComponent } from '../employer-management/components/sign-in-employer/sign-in-employer.component';

@Injectable()
export class AuthCompany implements CanActivate {

    loginCompanyDialogRef: MatDialogRef<SignInEmployerComponent>;
    constructor(private router: Router, public dialog: MatDialog, private profileService: ProfileService) {
        
    }
    openCompanyDialog() {
        this.loginCompanyDialogRef = this.dialog.open(SignInEmployerComponent, {
            data: {
              index: 0
            }
          });
    }

    canActivateSimple() {
        if (!localStorage.getItem('token')) {
            this.openCompanyDialog();
            return false;
        }
        return this.profileService.authCompany().toPromise().then((res: boolean) => {
            if (res == true) {
                return true;
            }
            else {
                this.openCompanyDialog();
                console.log(false);
                return false;
            }
        }).catch();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (!localStorage.getItem('token')){
            this.router.navigate(['']);
                this.openCompanyDialog();
                console.log(false);
                return false;
        }
        return this.profileService.authCompany().toPromise().then((res: boolean) => {
            if (res == true){
                return true;
            }
            else{
                this.router.navigate(['']);
                this.openCompanyDialog();
                console.log(false);
                return false;
            }
        }).catch();
    }

}
