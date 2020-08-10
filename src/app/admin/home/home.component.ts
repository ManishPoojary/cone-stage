import { Component } from '@angular/core';

import { User } from '../../admin/models';
import { AccountService } from '../../admin/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }

  logoutUser() {
    this.accountService.logout();
  }
}
