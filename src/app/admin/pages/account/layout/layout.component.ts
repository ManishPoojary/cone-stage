import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../../services';

@Component({ templateUrl: './layout.component.html',styleUrls:['./layout.component.scss'] })
export class LayoutComponent {
  constructor(private router: Router, private httpService: HttpService) {
    // redirect to home if already logged in
    if (this.httpService.userValue) {
      this.router.navigate(['/']);
    }
  }
}
