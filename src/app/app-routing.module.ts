import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { TermsandconditionComponent } from './Components/termsandcondition/termsandcondition.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { PartnerAndLogoComponent } from './Components/partner-and-logo/partner-and-logo.component';


const routes: Routes = [
  { path: '', redirectTo: '/Rowgistic', pathMatch: 'full' }, // 

  { path: 'Rowgistic', component: LandingPageComponent },
  { path: 'Rowgistic/TermsAndCondition', component: TermsandconditionComponent },
  { path: 'Rowgistic/contactus', component: ContactusComponent },
  { path: 'Rowgistic/Partners', component: PartnerAndLogoComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
