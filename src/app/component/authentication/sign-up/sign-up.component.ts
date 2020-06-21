import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {UsernameValidatorComponent} from "../../username-validator/username-validator.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private usernameValidator: UsernameValidatorComponent) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/']);
    }

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)],
      this.usernameValidator.validate.bind(this.usernameValidator)],
      pass: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  get username() {
    return this.registerForm.get('username');
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.registerForm.value).toPromise()
      .then(() => {
        this.router.navigate(["/"]);
      });
  }

  hasError(field: string, error: string) {
    const ctrl = this.registerForm.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

}
