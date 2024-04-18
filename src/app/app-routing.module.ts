import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'high-resolution-manometry', component: Page1Component},
  {path: 'ZepHR', component: Page2Component},
  {path: 'hydrogen-breathe-test', component: Page3Component},
  {path: 'catheter', component: Page4Component},
  {path: 'contact', component: ContactUsComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'testimonial', component: TestimonialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
