import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.scss'],
})
export class ConsultantComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.httpService.logout();
  }
}
