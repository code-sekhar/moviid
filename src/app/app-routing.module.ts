import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('../app/pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'login',loadChildren:()=>import('../app/pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'register',loadChildren:()=>import('../app/pages/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path:'upload-video',loadChildren:()=>import('../app/pages/upload-video/upload-video.module').then(m=>m.UploadVideoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
