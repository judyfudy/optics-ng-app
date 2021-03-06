import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";
import {SocialAuthService} from "angularx-social-login";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  token: string;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.token = this.route.snapshot.queryParams['token'];
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(data => {
        window.location.href = this.returnUrl;
        this.loading = false;
      });
  }

  public signinWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      console.log(userData);
      this.loading = true;
      this.authenticationService.loginFacebook(userData)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            window.location.href = this.returnUrl;
            this.loading = false;
          },
          error => {
            this.loading = false;
          });
    });
  }

}
