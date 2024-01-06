import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessingComponent } from './processing/processing.component';

const routes: Routes = [
  {
    path:'',component:ProcessingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessingRoutingModule { }
