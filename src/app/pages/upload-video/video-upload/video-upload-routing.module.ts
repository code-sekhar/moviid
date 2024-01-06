import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoUploadComponent } from './video-upload/video-upload.component';

const routes: Routes = [
  {
    path:'',component:VideoUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoUploadRoutingModule { }
