import { Routes } from "@angular/router";
import { CvComponent } from "./components/cv/cv.component";
import { EditCvComponent } from "./components/edit-cv/edit-cv.component";
import { FindCvComponent } from "./components/find-cv/find-cv.component";
import { AuthLaborer } from "../services/AuthLaborer";

export const cvRoutes: Routes = [
    {
        path: 'cv/:id',
        component: CvComponent
    },
    {
        path: 'editcv',
        component: EditCvComponent,
        canActivate: [AuthLaborer]
    },
    {
        path: 'findcv',
        component: FindCvComponent
    },
]