import { Component, OnInit } from '@angular/core';

import { User } from '../../../admin/models';
import { HttpService } from '../../../admin/services';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private httpService: HttpService) {
    this.user = this.httpService.userValue;
  }

  ngOnInit(): void {
    this.getBasicAnalytics()
  }

  logoutUser() {
    this.httpService.logout();
  }

  getBasicAnalytics(){
    this.httpService.getAnalytics().pipe(first()).subscribe(data =>{
      console.log(data);
      
    })
  }
}
