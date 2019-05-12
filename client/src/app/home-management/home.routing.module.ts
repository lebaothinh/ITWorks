import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TopemployerComponent } from "./components/topemployer/topemployer.component";
import { SearchJobsComponent } from "../job-management/components/search-jobs/search-jobs.component";


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