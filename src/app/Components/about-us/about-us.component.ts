import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{


  constructor( private route: Router,private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });  }
  isNavbarCollapsed = true;
  isBodyBlurred = false;
  isScrolled: boolean = false;

  toggleNavbar() {
    // this.isBodyBlurred =!this.isBodyBlurred;
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
