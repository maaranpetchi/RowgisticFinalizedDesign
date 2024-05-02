import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-and-logo',
  templateUrl: './partner-and-logo.component.html',
  styleUrls: ['./partner-and-logo.component.scss']
})
export class PartnerAndLogoComponent {

  constructor( private route: Router) {}
  isNavbarCollapsed = true;
  isBodyBlurred = false;
  isScrolled: boolean = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.isBodyBlurred = !this.isBodyBlurred;
  }

  navigatetoTerms() {
    const url = '/Rowgistic/TermsAndCondition';
    window.open(this.route.serializeUrl(this.route.createUrlTree([url])), '_blank');
  }
}
