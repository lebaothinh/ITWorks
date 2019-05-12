import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employer } from '../../../models/employer';
import { Review } from '../../../models/review';
import { LaborerandAdmin } from '../../../models/LaborerandAdmin';
import { Job } from '../../../models/job';
import { PLocation } from '../../../models/location';
import { Skill } from '../../../models/skill';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddReviewComponent } from '../../../laborer-management/components/add-review/add-review.component';
import { EmployerService } from '../../../services/EmployerService';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { JobService } from '../../../services/JobService';
import { ReviewService } from '../../../services/ReviewService';
import { TotalReview } from '../../../models/TotalReview';
import { FollowService } from '../../../services/FollowService';
import { MakeQuestionService } from '../../../services/MakeQuestionService';
import { MakeQuestion } from '../../../models/MakeQuestion';
import { LocationService } from '../../../services/LocationServicec';
import { AuthLaborer } from 'src/app/services/AuthLaborer';
import { ProfileService } from 'src/app/services/profileService';
import { CreatemakequestionComponent } from '../createmakequestion/createmakequestion.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private matSnackBar: MatSnackBar ,public authLaborer: AuthLaborer, public dialog: MatDialog, private followService: FollowService, private makeQuestionService: MakeQuestionService, private locationSerive: LocationService ,private employerService: EmployerService, private jobService: JobService, private route: ActivatedRoute, private reviewService: ReviewService) { }
  company = new Employer(null, null, null, null, null, null, null, null, null, null, null);
  sub: Subscription;
  pathimg = environment.API_URL_IMG;
  arrReviews = [];
  arrJobs: any[] = [];
  arrMakeQuestions: MakeQuestion[] = [];
  totalReview: TotalReview = new TotalReview(1,1,0,0,0,0,0,0,0);
  follow: boolean = false;

  OpenAddReviewDialog() {
    if (this.authLaborer.canActivateSimple())
    this.dialog.open(AddReviewComponent, {
      width: '46%',
      data: this.company.IDCompany
      // data: new Customer(this.tenKhachHang,this.ngaySinh,this.gioiTinh,this.email,this.dienThoai,this.moTa,this.cV,this.anhDaiDien)
    });
  }

  OpenMakeQuestionDialog(){
    if (this.authLaborer.canActivateSimple())
    this.dialog.open(CreatemakequestionComponent, {
      width: '46%',
      data: this.company.IDCompany
      // data: new Customer(this.tenKhachHang,this.ngaySinh,this.gioiTinh,this.email,this.dienThoai,this.moTa,this.cV,this.anhDaiDien)
    });
  }
  GetIDCompany() {
    this.sub = this.route.params.subscribe(param => {
      this.company.IDCompany = Number.parseInt(param['id']);
    })
  }

  getReview(idJob: number) {
    this.employerService.getReview(idJob).subscribe(reviewrl => {
      this.arrReviews = reviewrl;
    })
  }

  getTop5Job(IDCompany: number) {
    this.jobService.getTop5Job(IDCompany).subscribe(data => {
      this.arrJobs = data;
    });
  }

  getEmployer(IDCompany: number) {
    this.employerService.getEmployer(IDCompany).subscribe(companyrl => {
      this.company = companyrl[0];
    });
  }

  getBranches(IDCompany: number) {
    this.locationSerive.getLocations(IDCompany).subscribe(locationrl => {
      this.company.branches = locationrl;
      console.log(this.company);
      this.company.branches.forEach(element => {
        element.locationName = element.locationName.substring(0, element.locationName.indexOf(','));
      });
    })
  }

  getTotalReview(IDCompany: number) {
    this.reviewService.totalReview(IDCompany).subscribe(data => {
      this.totalReview = new TotalReview(data.recommendationTrue, data.recommendationFalse, data.star1, data.star2, data.star3, data.star4, data.star5, data.totalStar, data.avgStar);
      console.log(this.totalReview);
    });
  }

  getQuestion(IDCompany: number) {
    this.makeQuestionService.GetAllQuestion(IDCompany).subscribe(data => {
      this.arrMakeQuestions = data;
      console.log(this.arrMakeQuestions);
    }, error => {
      console.log(error);
      this.matSnackBar.open("Can not get questions!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
    });
  }

  ngOnInit() {
    this.GetIDCompany();
    this.getEmployer(this.company.IDCompany);
    this.getTop5Job(this.company.IDCompany);
    this.setStatusFollow();
    this.getQuestion(this.company.IDCompany);
    this.getReview(this.company.IDCompany);
    this.getBranches(this.company.IDCompany);
    this.getTotalReview(this.company.IDCompany);
  }


  setStatusFollow() {
    this.followService.getStatusFollow(this.company.IDCompany).subscribe(data => {
      if (data == true) this.follow = true;
      else if (data == false) this.follow = false;
    });
  }
  onClickFollow() {
    if (this.authLaborer.canActivateSimple())
    this.followService.setStatusFollow(this.company.IDCompany).subscribe(data => {
      if (data == "true") {
        this.follow = true;
      }
      else if (data == "false") {
        this.follow = false;
      }
      else {
        this.matSnackBar.open("Error!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
      }
    }, error => {
      console.log(error);
    });
  }
}
