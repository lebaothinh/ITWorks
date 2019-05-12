import { NgModule } from '@angular/core';
import { EmployershortcutComponent } from './components/employershortcut/employershortcut.component';
import { homeRoutes } from './components/home/home.routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopemployerComponent } from './components/topemployer/topemployer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmployerModule } from '../employer-management/employer.module';
import { SearchJobsComponent } from '../job-management/components/search-jobs/search-jobs.component';

@NgModule({
  declarations: [
    HomeComponent,
    EmployershortcutComponent,
    TopemployerComponent,
    SearchJobsComponent
  ],
  imports: [
    SharedModule,
    EmployerModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
