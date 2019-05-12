import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [],
  imports: [
    EditorModule,
    CommonModule,
  ],
  exports:[
    EditorModule
  ]
})
export class CkeditorModule { }
