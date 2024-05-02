import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {


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
