import { Component, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../../services/JobService';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private jobService: JobService) { }
  arrJobs: any[] = [];
  keywords: string;
  sub: Subscription;

  getKeyWord(){
    this.sub = this.route.params.subscribe(param => {
      this.keywords = param['key'];
    })
  }

  searchKeyWord(keywords: string){
    this.jobService.searchJobs(keywords).subscribe((data) => {
      this.arrJobs = data;
    });
  }

  ngOnInit() {
    this.getKeyWord();
    this.searchKeyWord(this.keywords);
  }

}
