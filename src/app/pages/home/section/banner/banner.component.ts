import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:6000,
    animateOut: 'fadeOut',
       animateIn: 'fadeIn',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      400: {
        items: 1,
        dots: false,
      },
      740: {
        items: 1,
        dots: false,
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
