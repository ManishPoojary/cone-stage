import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/admin/services';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  myForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities = [];
  dropdownSettings: any = {};
  constructor(public httpService: HttpService, private fb: FormBuilder) {}

  ngOnInit(): void {
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
      name: [this.selectedItems],
    });
    this.fetchCategory();
  }

  fetchCategory() {
    this.httpService.getConsultantCategory().subscribe((data: any) => {
      console.log(data);
      this.cities = data.category_types;
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
