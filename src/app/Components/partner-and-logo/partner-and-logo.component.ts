import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-and-logo',
  templateUrl: './partner-and-logo.component.html',
  styleUrls: ['./partner-and-logo.component.scss']
})
export class PartnerAndLogoComponent {


  
  isNavbarCollapsed = true;
  isBodyBlurred = false;
  
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.isBodyBlurred = !this.isBodyBlurred;
  }
}
