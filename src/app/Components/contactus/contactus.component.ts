import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {


  isNavbarCollapsed = true;
  isBodyBlurred = false;
  
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.isBodyBlurred = !this.isBodyBlurred;
  }

}
