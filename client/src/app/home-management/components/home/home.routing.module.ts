import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TopemployerComponent } from "src/app/home-management/components/topemployer/topemployer.component";
import { SearchJobsComponent } from "src/app/job-management/components/search-jobs/search-jobs.component";

export const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: TopemployerComponent },
            { path: 'search/:key', component: SearchJobsComponent }
        ]
    },
]