import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoUploadRoutingModule } from './video-upload-routing.module';
import { VideoUploadComponent } from './video-upload/video-upload.component';


@NgModule({
  declarations: [
    VideoUploadComponent
  ],
  imports: [
    CommonModule,
    VideoUploadRoutingModule
  ]
})
export class VideoUploadModule { }
