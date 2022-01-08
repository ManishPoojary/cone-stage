import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-type-list',
  templateUrl: './category-type-list.component.html',
  styleUrls: ['./category-type-list.component.scss'],
})
export class CategoryTypeListComponent implements OnInit {
  users = null;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.fetchAllCategoryTypes();
  }

  fetchAllCategoryTypes() {
    this.httpService
      .getAllCategoryTypes()
      .pipe(first())
      .subscribe((users: any) => {
        this.users = users.category_types;
        console.log(this.users);
      });
  }

  deleteCategoryType(catId: string) {
    const user = this.users.find((x) => x.id === catId);
    user.isDeleting = true;
    let data = {
      id: catId,
    };
    this.httpService
      .deleteCategoryType(data)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter((x) => x.id !== catId);
      });
  }
}
