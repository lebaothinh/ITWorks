import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PLocation } from '../../../models/location';
import { BranchService } from '../../../services/BranchService';
import { LocationService } from '../../../services/LocationServicec';

@Component({
  selector: 'app-address-profile',
  templateUrl: './address-profile.component.html',
  styleUrls: ['./address-profile.component.css']
})
export class AddressProfileComponent implements OnInit {

  constructor(
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddressProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private locationService: LocationService,
    private branchService: BranchService) { }

  formData: FormGroup;
  checkStatus: boolean = true; // Check update=false or add =true
  currentLocation: PLocation;

  ngOnInit() {
    this.currentLocation = new PLocation('', '');
    this.InitForm();
    this.checkData();
  }

  checkData() {
    if (this.data.data !== 'true') {
      this.GetData(this.data.data);
    }
  }

  GetData(IDLocation: number) {
    console.log(IDLocation);
    this.locationService.getLocation(IDLocation).subscribe((datars: any) => {
      this.currentLocation = datars;
      this.InitForm();
    }, error => {
      console.log(error);
      this.matSnackBar.open("Can not load location data!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  btnOKClick() {
    if (this.data.data == 'true') {
      this.locationService.insertLocation(this.formData).subscribe(data => {
        let formBranch: FormGroup = new FormGroup({
          IDCompany: new FormControl(this.data.IDCompany),
          IDLocation: new FormControl(data)
        });
        this.branchService.insertBranch(formBranch).subscribe(data => {
          if (data == "Thanh cong!"){
            this.matSnackBar.open("Insert Address Successfully!","Close",{
              duration: 2000,
              verticalPosition: 'top',
              panelClass: "success-dialog",
            })
            this.dialogRef.close();
          }
        }, error => {
          console.log(error);
          this.matSnackBar.open("Insert Address Fail!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "warn-dialog"
          })
        });
      }, error => {
        console.log(error);
        this.matSnackBar.open("Insert Address Error!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      });
    }
    else {
      this.locationService.updateLocation(this.formData).subscribe(data => {
        if (data == "Thanh cong!") {
          this.matSnackBar.open("Update Address Successfully!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog"
          })
          window.location.reload();
        }
      }, error => {
        console.log(error);
        this.matSnackBar.open("Update Address Error!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      });
    }
  }

  InitForm() {
    this.formData = new FormGroup({
      IDLocation: new FormControl(this.currentLocation.IDLocation,
      ),
      locationName: new FormControl(this.currentLocation.locationName,
        Validators.required
      ),
      map: new FormControl(this.currentLocation.map,
      )
    });
  }



}
