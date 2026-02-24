import { NgIf, NgSwitch, NgSwitchCase, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgSwitch, NgSwitchCase, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuType: string = 'default';
  sellerName: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        console.warn(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn('in seller area');
          this.menuType = 'seller';

          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore);            
              this.sellerName = sellerData.name;       
          }
        } else {
          console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
