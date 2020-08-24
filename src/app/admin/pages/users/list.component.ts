import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HttpService } from '../../../admin/services';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users = null;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllConsultants();
  }

  getAllConsultants() {
    this.httpService
      .getAll()
      .pipe(first())
      .subscribe((users: any) => {
        this.users = users.consultants;
        console.log(this.users);
      });
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    user.isDeleting = true;
    this.httpService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter((x) => x.id !== id);
      });
  }
}
