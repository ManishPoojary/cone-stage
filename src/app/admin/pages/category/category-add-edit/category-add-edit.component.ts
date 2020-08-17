import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService, AlertService } from '@app/admin/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss'],
})
export class CategoryAddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  categoryTypes = null;
  selectedCategoryItem = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.httpService
        .getCategoryById(this.id)
        .pipe(first())
        .subscribe((x: any) => {
          console.log(x.category_type);

          this.f.name.setValue(x.category_type.name);
        });
    }
    this.fetchAllCategoryTypes();
  }

  fetchAllCategoryTypes() {
    this.httpService
      .getAllCategoryTypes()
      .pipe(first())
      .subscribe((category: any) => {
        this.categoryTypes = category.category_types;
        console.log(category.category_types);
      });
  }

  
  getCategoryTypeId(id) {
    console.log(id);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.httpService
      .categoryEditorCreate(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.toastr.success('Success', 'Category Type added successfully');
          // this.router.navigate(['/admin/category-type', { relativeTo: this.route }]);
          this.router.navigate(['/admin/category-type']);
        },
        (error) => {
          this.toastr.error('Alert', error.name);
          console.log(error.name);

          this.loading = false;
        }
      );
  }

  private updateUser() {
    this.httpService
      .categoryEditorUpdate(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.toastr.success('Success', 'Category Type updated successfully');
          this.router.navigate(['/admin/category-type']);
        },
        (error) => {
          this.toastr.error('Alert', error.name);
          this.loading = false;
        }
      );
  }
}
