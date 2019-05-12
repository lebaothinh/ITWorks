import { NgModule } from '@angular/core'
import { AdminComponent } from './admin.component';
import { QuanlydanhgiaComponent } from './quanlydanhgia/quanlydanhgia.component';
import { QuanlynguoilaodongComponent } from './quanlynguoilaodong/quanlynguoilaodong.component';
import { QuanlynhatuyendungComponent } from './quanlynhatuyendung/quanlynhatuyendung.component';
import { QuantrihethongComponent } from './quantrihethong/quantrihethong.component';
import { Routes, RouterModule } from '@angular/router';
import { ThongkedoanhthuComponent } from './thongkedoanhthu/thongkedoanhthu.component';
import { SharedModule } from '../shared/shared.module';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AuthAdmin } from '../services/AuthAdmin';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule } from '@angular/material';

const routesConfig: Routes = [
        {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthAdmin],
        children: [
            {
                path: '',
                redirectTo: 'thongkedoanhthu',
                pathMatch: 'full'
            },
            { path: 'thongkedoanhthu', component: ThongkedoanhthuComponent },
            { path: 'quantrihethong', component:  QuantrihethongComponent},
            { path: 'quanlynhatuyendung', component: QuanlynhatuyendungComponent},
            { path: 'quanlynguoilaodong', component: QuanlynguoilaodongComponent},
            { path: 'quanlydanhgia', component: QuanlydanhgiaComponent}
        ]
    },
]

@NgModule({
    declarations: [
        AdminComponent,
        QuanlydanhgiaComponent,
        QuanlynguoilaodongComponent,
        QuanlynhatuyendungComponent,
        QuantrihethongComponent,
        ThongkedoanhthuComponent,
        LeftmenuComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        RouterModule.forChild(routesConfig)
    ],
    providers:[
        AuthAdmin
    ]
})

export class AdminModule {

}