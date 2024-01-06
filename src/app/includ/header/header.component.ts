import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
show_mobile_menu:any;
clickMobilemonu(){
  this.show_mobile_menu = !this.show_mobile_menu;
}
clickCloseHandler(){
  this.show_mobile_menu = false;
}
}
