import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ReviewService } from '../../../services/ReviewService';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar,public dialogRef: MatDialogRef<AddReviewComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private reviewService: ReviewService) { }
  formData: FormGroup;
  rating: number = 0;
  recommendation: boolean = false;
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = new FormGroup({
      IDLaborer: new FormControl(0,
        Validators.required
        ),
      IDCompany: new FormControl(this.data,
        Validators.required
        ),
      star: new FormControl(this.rating,
        Validators.required
        ),
      title: new FormControl('',
        Validators.required
      ),
      recommendation: new FormControl(this.recommendation,
        Validators.required
        ),
      reviewDate: new FormControl(new Date(Date.now()),
        Validators.required
      ),
      like: new FormControl('',
        Validators.required
      ),
      dislike: new FormControl('',
        Validators.required
      )
    });
  }

  set_Data(){
    this.formData.controls.star.setValue(this.rating);
    this.formData.controls.recommendation.setValue(this.recommendation);
  }

  onSubmit(){
    this.set_Data();
    this.reviewService.insertReview(this.formData).subscribe(data => {
      if (data == "Thanh cong!"){
        this.matSnackBar.open("Review Successfully!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
        this.dialogRef.close();
      }
      if (data == ""){
        this.matSnackBar.open("Wrong Token!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
    }, error => {
      console.log(error);
      this.matSnackBar.open("Add Review Error!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }
}
