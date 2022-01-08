import { Component } from '@angular/core';

import { User } from './admin/models';
import { HttpService } from './admin/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cone-stage';

  user: User;

  constructor(private accountService: HttpService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
