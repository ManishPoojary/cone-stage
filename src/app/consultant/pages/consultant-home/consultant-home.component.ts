import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';

@Component({
  selector: 'app-consultant-home',
  templateUrl: './consultant-home.component.html',
  styleUrls: ['./consultant-home.component.scss'],
})
export class ConsultantHomeComponent implements OnInit {
  categories;
  chatWindow: boolean = false;
  constructor(public httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchCategory();
  }

  fetchCategory() {
    this.httpService.getConsultantCategory().subscribe((data: any) => {
      console.log(data);
      this.categories = data.category_types;
    });
  }

  openChatBox() {
    this.chatWindow = !this.chatWindow;
  }
}
