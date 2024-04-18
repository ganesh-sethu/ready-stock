import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Page4Component } from './page4/page4.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientHospitalsComponent } from './client-hospitals/client-hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Navbar2Component,
    Page4Component,
    WhatwedoComponent,
    ContactUsComponent,
    AddressListComponent,
    AccessoriesComponent,
    TestimonialComponent,
    ClientHospitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
