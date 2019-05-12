import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SignInComponent } from '../laborer-management/components/sign-in/sign-in.component';
import { ProfileService } from './profileService';

@Injectable()
export class AuthLaborer implements CanActivate {

    loginLaborerDialogRef: MatDialogRef<SignInComponent>;
    role = false;
    constructor(private router: Router, public dialog: MatDialog, private profileService: ProfileService) {

    }
    openLaborerDialog() {
        this.loginLaborerDialogRef = this.dialog.open(SignInComponent);
    }

    getAuth() {
        this.profileService.authLaborer().subscribe((data: boolean) => {
            if (data == false) {
                this.openLaborerDialog();
                return;
            }
        });
    }
    canActivateSimple() {
        if (!localStorage.getItem('token')) {
            this.openLaborerDialog();
            return false;
        }
        return this.profileService.authLaborer().toPromise().then((res: boolean) => {
            if (res == true) {
                return true;
            }
            else {
                this.openLaborerDialog();
                console.log(false);
                return false;
            }
        }).catch();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['']);
            this.openLaborerDialog();
            console.log(false);
            return false;
        }
        return this.profileService.authLaborer().toPromise().then((res: boolean) => {
            if (res == true) {
                return true;
            }
            else {
                this.router.navigate(['']);
                this.openLaborerDialog();
                console.log(false);
                return false;
            }
        }).catch();
    }

}
