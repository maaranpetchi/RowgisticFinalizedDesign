import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TermsandconditionComponent } from './Components/termsandcondition/termsandcondition.component';

import { environment } from 'src/Environments/environment';
import { ContactusComponent } from './Components/contactus/contactus.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PartnerAndLogoComponent } from './Components/partner-and-logo/partner-and-logo.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactusComponent,
    TermsandconditionComponent,
    PartnerAndLogoComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    NgxDocViewerModule,

    provideFirebaseApp( ()=> initializeApp(environment.firebaseConfig)),
    provideFirestore(()=> getFirestore()),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }