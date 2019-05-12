import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployerService } from '../../../services/EmployerService';
import { ProfileService } from '../../../services/profileService';
import { Employer } from '../../../models/employer';
import { FileUploadService } from '../../../services/fileUploadService';
import { PLocation } from '../../../models/location';
import { AddressProfileComponent } from '../address-profile/address-profile.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RegisterPackagesService } from '../../../services/RegisterPackages';
import { RegisterPackage } from '../../../models/RegisterPackage';
import { LocationService } from '../../../services/LocationServicec';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-employer',
  templateUrl: './profile-employer.component.html',
  styleUrls: ['./profile-employer.component.css']
})
export class ProfileEmployerComponent implements OnInit {

  @ViewChild('file1') file1;
  @ViewChild('file2') file2;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  arrRegisterPackages: RegisterPackage[];


  constructor(
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private employerService: EmployerService,
    private locationService: LocationService,
    private profileService: ProfileService,
    private fileUploadService: FileUploadService,
    private registerPackagesService: RegisterPackagesService) { }
  editorValue: string = "";
  informationGroup: FormGroup;
  overViewGroup: FormGroup;
  Skills: FormGroup;
  tinyConfig = environment.tinyConfig;
  apiKey = environment.apiKey;
  arrLocations: PLocation[];
  company: Employer = new Employer(null, null, null, null, null, null, null, null, null, null, null);

  ngOnInit() {
    this.initialForm();
    this.getIDCompany();
    console.log(this.overViewGroup.controls.overView);
  }

  initialForm() {
    this.informationGroup = new FormGroup({
      IDCompany: new FormControl(this.company.IDCompany),
      companyName: new FormControl(this.company.companyName, [
        Validators.required,
      ]),
      generalDescription: new FormControl(this.company.generalDescription, [
        Validators.required,
      ]),
      logo: new FormControl(this.company.logo, [
        Validators.required,
      ]),
      avatar: new FormControl(this.company.avatar, [
        Validators.required,
      ]),
      startTime: new FormControl(this.company.startTime, [
        Validators.required,
      ]),
      endTime: new FormControl(this.company.endTime, [
        Validators.required,
      ]),
      services: new FormControl(this.company.services, [
        Validators.required,
      ]),
      numberOE: new FormControl(this.company.numberOE, [
        Validators.required,
      ]),
      country: new FormControl(this.company.country, [
        Validators.required,
      ]),
      email: new FormControl(this.company.email, [
        Validators.required,
        Validators.email
      ]),
      phoneNumber: new FormControl(this.company.phoneNumber, [
        Validators.required,
      ])
    });
    this.overViewGroup = new FormGroup({
      IDCompany: new FormControl(this.company.IDCompany),
      overView: new FormControl(this.company.overView , [
        Validators.required
      ])
    });
  }
  addLogo() {
    this.file1.nativeElement.click();
  }
  handleFileLogo(files: FileList) {
    this.fileToUpload1 = files.item(0);
    this.informationGroup.controls.logo.setValue(this.fileToUpload1.name);
    console.log(this.fileToUpload1);
  }
  handleFileAvatar(files: FileList) {
    this.fileToUpload2 = files.item(0);
    this.informationGroup.controls.avatar.setValue(this.fileToUpload2.name);
    console.log(this.fileToUpload2);
  }
  addAvatar() {
    this.file2.nativeElement.click();
  }
  getIDCompany() {
    this.profileService.getID().subscribe((data) => {
      this.company.IDCompany = Number.parseInt(data.toString());
      this.getInformation();
    })
  }
  getInformation() {
    this.employerService.getEmployer(this.company.IDCompany).subscribe((data) => {
      this.company = data[0];
      this.overViewGroup.controls.IDCompany.setValue(this.company.IDCompany);
      this.overViewGroup.controls.overView.setValue(this.company.overView);
      this.initialForm();
    });
    this.getLocation();
    this.loadPackages();
  }
  getLocation() {
    this.locationService.getLocations(this.company.IDCompany).subscribe((data) => {
      this.arrLocations = data;
    });
  }
  onSaveGeneral() {
    console.log(this.informationGroup);
    if (this.fileToUpload1 == null && this.fileToUpload2 == null) {
      //Employer
      console.log(this.informationGroup.value);
      this.employerService.updateEmployer(this.informationGroup).subscribe(() => {
        this.matSnackBar.open("Updated Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }, error => {
        console.error(error);
        this.matSnackBar.open("Update Fail!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      });
    }
    else if (this.fileToUpload1 != null && this.fileToUpload2 != null) {
      this.fileUploadService.uploadLogo(this.fileToUpload1).subscribe((datanamelogo: string) => {
        this.fileUploadService.uploadAvatar(this.fileToUpload2).subscribe((datanameav: boolean) => {
          //Employer

          this.informationGroup.controls.logo.setValue(datanamelogo);
          this.informationGroup.controls.avatar.setValue(datanameav);
          this.employerService.updateEmployer(this.informationGroup).subscribe(() => {
            this.matSnackBar.open("Updated Successfully!","Close",{
              duration: 2000,
              verticalPosition: 'top',
              panelClass: "success-dialog",
            })
          }, error => {
            console.error(error);
            this.matSnackBar.open("Update Fail!","Close",{
              duration: 2000,
              verticalPosition: 'top',
              panelClass: "warn-dialog"
            })
          });
        }, error => {
          console.error(error);
        });
      })

    }
    else if (this.fileToUpload1 != null) {
      //Move image into folder
      this.fileUploadService.uploadLogo(this.fileToUpload1).subscribe((dataname: string) => {
        //Employer

        this.informationGroup.controls.logo.setValue(dataname);
        this.employerService.updateEmployer(this.informationGroup).subscribe(() => {
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }, error => {
          console.error(error);
          this.matSnackBar.open("Update Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        });

      }, error => {
        console.error(error);
      });
    }
    else if (this.fileToUpload2 != null) {
      //Move image into folder
      this.fileUploadService.uploadAvatar(this.fileToUpload2).subscribe((dataname: string) => {
        //Employer
        this.informationGroup.controls.avatar.setValue(dataname);
        this.employerService.updateEmployer(this.informationGroup).subscribe(() => {
          this.matSnackBar.open("Updated Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }, error => {
          console.error(error);
          this.matSnackBar.open("Update Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        });
      }, error => {
        console.error(error);
      });
    }
    else {

    }
  }
  onSaveOverview() {
    this.employerService.updateOverview(this.overViewGroup).subscribe(() => {
      this.matSnackBar.open("Updated Successfully!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "success-dialog",
      })
    }, error => {
      console.error(error);
      this.matSnackBar.open("Update Fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  openAddressProfile(data: string) {
    this.dialog.open(AddressProfileComponent, {
      width: '46%',
      data: {
        data: data,
        IDCompany: this.company.IDCompany
      }
    }).afterClosed().subscribe(rl => this.getLocation());
  }

  loadPackages() {
    this.registerPackagesService.GetAllPackagesStatus().subscribe(data => {
      this.arrRegisterPackages = data;
      console.log(data);
    });
  }

  deleteBranch(id: number) {
    this.locationService.deleteLocation(id).subscribe((data) => {
      if (data == "Thanh cong!") {
        this.matSnackBar.open("Deleted Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.arrLocations = this.arrLocations.filter(eachLocation => eachLocation.IDLocation !== id);
      }
    }, error => {
      console.error(error);
      this.matSnackBar.open("Delete Fail!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  convertToDate (date: string): String{
    if (date == "0001-01-01T00:00:00"){
      return "Unregistered";
    }
    else{

    }
    return "";
  }

}
