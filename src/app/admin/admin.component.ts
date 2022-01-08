import { Component, OnInit } from '@angular/core';
import { HttpService } from './services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.httpService.logout();
  }
}
