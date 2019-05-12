import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { JobService } from '../../../services/JobService';
import { EmployerService } from '../../../services/EmployerService';
import { Employer } from '../../../models/employer';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar,private jobService: JobService, private employerService: EmployerService) { }

  keywords: string = "";
  arrEmployers: Employer[] = [];
  arrSkills: Array<Skill> = [
    new Skill('C#'),
    new Skill("Angular"),
    new Skill("ReactJS"),
    new Skill("Java")
  ]
  arrJobs: any[] = [];
  ngOnInit() {
    this.loadTop6Employer();
    
  }

  searchKeyWord() {
    if (this.keywords == "") {
      this.matSnackBar.open("Please type keyworks!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "success-dialog",
      })
    }
    else {
      this.jobService.searchJobs(this.keywords).subscribe((data) => {
        if (data.length == 0){
          this.matSnackBar.open("Can not find appropriate works!","Close",{
            duration: 2000,
            verticalPosition: 'top',
            panelClass: "success-dialog",
          })
        }
        else {
          document.getElementById('bigtopemployer').scrollIntoView();
        }
        this.arrJobs = data;
        console.log(this.arrJobs);
      }, error => {
        this.matSnackBar.open("Error!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "warn-dialog"
        })
        console.log(error);
      });
    }
  }

  getAllShortcutJobs(){
    this.jobService.getAllShortcutJobs().subscribe((data) => {
      if (data.length == 0){
        this.matSnackBar.open("Can not find appropriate works!","Close",{
          duration: 2000,
          verticalPosition: 'top',
          panelClass: "success-dialog",
        })
      }
      else this.arrJobs = data;
    }, error => {
      this.matSnackBar.open("Error!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      console.log(error);
    });
  }

  loadTop6Employer() {
    this.employerService.getTop6Employer().subscribe((data: Employer[]) => {
      this.arrEmployers = data;
    }, error => {
      this.matSnackBar.open("Can not load Employers!","Close",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: "warn-dialog"
      })
      console.log(error);
    });
  }
}
