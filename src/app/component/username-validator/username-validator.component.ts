import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractControl} from "@angular/forms";
import {SignUpComponent} from "../authentication/sign-up/sign-up.component";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-username-validator',
  templateUrl: './username-validator.component.html',
  styleUrls: ['./username-validator.component.css']
})
export class UsernameValidatorComponent implements OnInit {

  private timeout;
  signUpUrl: string = 'http://localhost:8080/signup';

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
  }

  validate(control: AbstractControl): Promise<{ [key: string]: boolean }> {
    clearTimeout(this.timeout);

    const checkedName = control.value;

    if (!checkedName || checkedName.length < 2) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      this.timeout = setTimeout(() => {
        this.http.get<boolean>(this.signUpUrl + '?name=' + checkedName)
          .subscribe(flag => {
              if (flag) {
                resolve({'usernameTaken': true});
              } else {
                resolve(null);
              }
            },
            (err) => {
              console.log(err);
            }
          );
      }, 2000);

    });
  }


}
