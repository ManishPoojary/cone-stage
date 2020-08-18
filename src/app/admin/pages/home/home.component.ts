import { Component, OnInit } from '@angular/core';

import { User } from '../../../admin/models';
import { HttpService } from '../../../admin/services';
import { first } from 'rxjs/operators';
import { Analytics } from '../../../admin/models/analytics';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User;
  analytics_count: Analytics = null;

  constructor(private httpService: HttpService) {
    this.user = this.httpService.userValue;
  }

  ngOnInit(): void {
    this.getBasicAnalytics();
  }

  

  getBasicAnalytics() {
    this.httpService
      .getAnalytics()
      .pipe(first())
      .subscribe((data: any) => {
        this.analytics_count = data.analytics_count;
        console.log(this.analytics_count);
      });
  }
}
