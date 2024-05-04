import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
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

  faqPopup(){

    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Not ready yet",
      showConfirmButton: false,
      timer: 3000
    });
  }
    articles(){
  
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Coming soon",
      showConfirmButton: false,
      timer: 3000
    });
  }
}
