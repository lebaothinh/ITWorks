import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SignInComponent } from '../laborer-management/components/sign-in/sign-in.component';
import { ProfileService } from './profileService';

@Injectable()
export class AuthAdmin implements CanActivate {

    loginLaborerDialogRef: MatDialogRef<SignInComponent>;
    role = false;
    constructor(private router: Router, public dialog: MatDialog, private profileService: ProfileService) {
        
    }
    openLaborerDialog() {
        this.loginLaborerDialogRef = this.dialog.open(SignInComponent, { disableClose: true });
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (!localStorage.getItem('token')){
            this.router.navigate(['']);
                this.openLaborerDialog();
                console.log(false);
                return false;
        }
        return this.profileService.authAdmin().toPromise().then((res: boolean) => {
            if (res == true){
                return true;
            }
            else{
                this.router.navigate(['']);
                this.openLaborerDialog();
                console.log(false);
                return false;
            }
        }).catch();
    }

}
