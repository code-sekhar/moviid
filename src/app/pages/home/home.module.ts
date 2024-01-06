import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './section/banner/banner.component';
import { ServiceComponent } from './section/service/service.component';
import { AboutComponent } from './section/about/about.component';
import { ContactComponent } from './section/contact/contact.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,CarouselModule
  ]
})
export class HomeModule { }
