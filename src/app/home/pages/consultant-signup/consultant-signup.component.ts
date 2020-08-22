import { Component, OnInit } from '@angular/core';
import * as countryNames from './country.data.json';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService, AlertService } from '@app/admin/services';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consultant-signup',
  templateUrl: './consultant-signup.component.html',
  styleUrls: ['./consultant-signup.component.scss'],
})
export class ConsultantSignupComponent implements OnInit {
  countryList = countryNames['default'];
  interest = ['Technology', 'Mobile', 'PC'];
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      country: ['', Validators.required],
      interest: ['', Validators.required],
    });
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
    this.httpService
      .registerConsultant(this.form.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.toastr.success('Registration successful')
          this.router.navigate(['/home/consultant-signin']);
        },
        (error) => {
          this.toastr.error('Error', error.name)
          this.loading = false;
        }
      );
  }
}
