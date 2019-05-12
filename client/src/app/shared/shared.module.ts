import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule, MatRadioModule, MatGridListModule, MatSidenavModule, MatCheckboxModule, MatProgressBarModule, MatListModule, MatSelectModule, MatOptionModule, MatExpansionModule, MatSlideToggleModule, MatToolbarModule, MatAutocomplete, MatAutocompleteModule, MatTooltipModule, MatSnackBar, MatSnackBarModule } from '../../../node_modules/@angular/material';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { SafeHtmlPipe } from '../pipes/Safe.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        SafeHtmlPipe,
    ],
    imports:[
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatBadgeModule,
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatGridListModule,
        BrowserModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatListModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatSnackBarModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        MatBadgeModule,
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatGridListModule,
        BrowserModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatListModule,
        HttpClientModule,
        MatSelectModule,
        MatOptionModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatTooltipModule,
        SafeHtmlPipe,
        CommonModule,
        MatSnackBarModule
    ]
})
export class SharedModule{

}