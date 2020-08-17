import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  users = null;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.fetchAllCategoryTypes();
  }

  fetchAllCategoryTypes() {
    this.httpService
      .getAllCategoryEditor()
      .pipe(first())
      .subscribe((users: any) => {
        this.users = users.category_types;
        console.log(this.users);
      });
  }

  deleteCategoryEditor(catId: string) {
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
