import { Routes } from "@angular/router";
import { JobComponent } from "./components/job/job.component";

export const jobRoutes: Routes = [
    {
        path: 'job/:id',
        component: JobComponent
    },
]