import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {


  constructor( private route: Router) {}
  isNavbarCollapsed = true;
  isBodyBlurred = false;
  isScrolled: boolean = false;

  toggleNavbar() {
    const navbarToggler = document.getElementById('navbar-toggler');
    if (navbarToggler) {
      if (navbarToggler.classList.contains('focus-visible')) {
        navbarToggler.classList.remove('focus-visible');
        navbarToggler.style.boxShadow = 'none';
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
        this.isBodyBlurred = !this.isBodyBlurred;
      } else {
        navbarToggler.classList.add('focus-visible');
        navbarToggler.style.boxShadow = '0 0 0 .25rem';
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
        this.isBodyBlurred = !this.isBodyBlurred;
      }
    }
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
