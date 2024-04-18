import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  keepItPink: boolean = true;
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = false;
  isCollapsed6 = false;

  constructor(private route: Router) {
    this.geturl()
  }

  geturl() {
    const pageUrl = this.route.url;

    if(pageUrl === '/home' || '/') {
      this.keepItPink = true;
    } else {
      this.keepItPink = false;
    }
  }

  // getDynamicStyles() {
  //   return {
  //     'background-color': this.keepItPink ? 'green' : 'red',
  //     // Add more styles as needed
  //   };
  // }

}
