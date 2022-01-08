import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent implements OnInit {
  selectedItems = [];
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  categories = [];
  dropdownSettings: any = {};
  consultant;
  categoryID;
  constructor(
    public httpService: HttpService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.consultant = this.httpService.userValue['consultant'];
  }

  ngOnInit(): void {
    this.categoryID = this.route.snapshot.paramMap.get('id');

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true,
    };
    this.myForm = this.fb.group({
      categories: [],
    });
    this.fetchCategory();
  }

  fetchCategory() {
    this.httpService
      .getSubCategoryBasedOnCategory(this.categoryID)
      .subscribe((data: any) => {
        console.log(data);
        this.categories = data.categories;
      });
  }

  saveCategory() {
    let data = {
      categories: this.myForm.value.categories.map((x) => x.id),
    };
    console.log(data);

    this.httpService
      .putConsultantCategory(this.consultant.id, data)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onItemSelect(item: any) {
    console.log(this.myForm);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
