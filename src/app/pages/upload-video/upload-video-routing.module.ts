import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';

const routes: Routes = [
  {
    path:'',component:UploadVideoComponent,
    children:[
      {
        path:'video-upload',loadChildren:()=>import('../upload-video/video-upload/video-upload.module').then(m=>m.VideoUploadModule)
      },
      {
        path:'language',loadChildren:()=>import('../upload-video/language/language.module').then(m=>m.LanguageModule)
      },
      {
        path:'processing',loadChildren:()=>import('../upload-video/processing/processing.module').then(m=>m.ProcessingModule)
      },
      {
        path:'download',loadChildren:()=>import('../upload-video/download/download.module').then(m=>m.DownloadModule)
      },
      { path: 'upload-video', redirectTo: '/video-upload', pathMatch: 'full' },
      { path: '**', redirectTo: '/video-upload' },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadVideoRoutingModule { }
