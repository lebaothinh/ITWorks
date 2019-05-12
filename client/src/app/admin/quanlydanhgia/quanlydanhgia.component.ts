import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/ReviewService';
import { Review } from 'src/app/models/review';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-quanlydanhgia',
  templateUrl: './quanlydanhgia.component.html',
  styleUrls: ['./quanlydanhgia.component.css']
})
export class QuanlydanhgiaComponent implements OnInit {

  constructor(private reviewService: ReviewService, private matSnackBar: MatSnackBar) { }
  arrReviews: Review[] = [];

  loadReview(){
    this.reviewService.getAllReviewByAdmin().subscribe(data => {
      this.arrReviews = data;
      console.log(this.arrReviews);
    });
  }

  onDeleteReview(idCompany: number, idLaborer: number){
    this.reviewService.deleteReviewByAdmin(idCompany,idLaborer).subscribe((data: Boolean) => {
      if (data == true) {
        this.matSnackBar.open("Deleted Successfully!","Delete",{
          duration: 2000,
          verticalPosition: 'top'
        })
      }
      this.arrReviews = this.arrReviews.filter(eachReview => eachReview.IDCompany != idCompany && eachReview.IDLaborer != idLaborer);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.loadReview();
  }

}
